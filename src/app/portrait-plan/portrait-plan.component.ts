import { Component, OnInit, OnChanges, Input, HostListener } from '@angular/core';
import { AppService } from '../app.service'
@Component({ //TODO: portrait plan template
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

  keypress: KeyboardEvent = null

  curSlideshow = null

  plan: object

  constructor(private _appService: AppService) {
  }

  ngOnInit() {
    this.setupSlide()
  }

  ngOnChanges() {
    this._appService.getJsonData(this.db).subscribe((data) => {
      this.plan = data[this.index];
      console.log(this.plan)
    })
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

  @HostListener('window:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    this.keypress = ev;
  }

  keypressComp() {
    this.keypress = null;
  }
}
