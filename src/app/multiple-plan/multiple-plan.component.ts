import { Component, OnInit, OnChanges, Input, HostListener } from '@angular/core';
import { AppService } from '../app.service'

@Component({
  selector: 'app-multiple-plan',
  templateUrl: './multiple-plan.component.html',
  styleUrls: ['./multiple-plan.component.css']
})
export class MultiplePlanComponent implements OnInit, OnChanges {

  @Input()
  db: any

  @Input()
  firstIndex: any

  @Input()
  slideshow: any

  plans: any

  keypress: KeyboardEvent = null

  curSlideshow = null

  state: string

  footer: any

  constructor(private _appService: AppService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.db);
    this._appService.getJsonData(this.db).subscribe((data) => {
      this.plans = data.slice(this.firstIndex);
      this.state = this.plans[0]["Stand"]["Inhalt"]
      this.footer = this.plans[0]["Footer"]
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

  @HostListener('window:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    this.keypress = ev;
  }

  keypressComp() {
    this.keypress = null;
  }
}

