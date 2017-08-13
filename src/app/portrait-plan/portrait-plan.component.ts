import { Component, OnInit, OnChanges, Input, HostListener } from '@angular/core';
import { AppService } from '../app.service'
@Component({
  selector: 'app-portrait-plan',
  templateUrl: './portrait-plan.component.html',
  styleUrls: ['./portrait-plan.component.css']
})

export class PortraitPlanComponent implements OnInit, OnChanges {

  @Input()
  db: any

  @Input()
  index: any

  @Input()
  slideshow: any

  @Input()
  keypress: string

  curSlideshow = null

  plan: object

  state: string

  footer: any

  constructor(private _appService: AppService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this._appService.getJsonData(this.db).subscribe((data) => {
      this.plan = data[this.index];
      this.state = this.plan["Stand"]["Inhalt"]
      this.footer = this.plan["Footer"]
    })
    this.setupSlide()
  }

  slideComp() {
    this.curSlideshow = null;
    this.setupSlide();
  }

  setupSlide() {
    if (this.slideshow) {
      setTimeout(() => {
        this.curSlideshow = this.slideshow.params
      }, this.slideshow.interval)
    }
  }

  keypressComp() {
    this.keypress = null;
  }
}
