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

  @Input()
  keypress: string

  plans: any

  curSlideshow = null

  state: string

  footer: any

  constructor(private _appService: AppService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this._appService.getJsonData(this.db).subscribe((data) => {
      this.plans = data.slice(this.firstIndex);
      /*this.plans.forEach(plan => {
        plan["Abwesenheiten"]=[]
      });*/
      this.state = this.plans[0]["Stand"]["Inhalt"]
      this.footer = this.plans[0]["Footer"]
    })
    this.setupSlide()
  }

  FirstRunTimer: any
  StopTimer: any

  setupSlide() {
    clearTimeout(this.FirstRunTimer);
    clearTimeout(this.StopTimer);

    if (this.slideshow) {
      var begin = this.slideshow.timeStart ? Date.parse(this.slideshow.timeStart) : null
      var end = this.slideshow.timeEnd ? Date.parse(this.slideshow.timeEnd) : null

      var timeToBegin = begin ? (begin - Date.now()) : null
      var timeToEnd = end ? (end - Date.now()) : null

      console.log(timeToBegin + "  " + timeToEnd)
      console.log((end == null) + " " + (timeToEnd > 0))
      if (end == null || timeToEnd > 0) {
        this.FirstRunTimer = setTimeout(() => {
          this.startSlideshow()
        }, timeToBegin)
        console.log("next pres in " + timeToBegin)
      }

      if (end != null) {
        this.StopTimer = setTimeout(() => {
          this.stopSlideshow()
        }, timeToEnd)
        console.log("stop pres in " + timeToEnd)
      }

    } else {
      this.stopSlideshow();
    }
  }

  ReRunTimer: number
  startSlideshow() {
    clearTimeout(this.ReRunTimer)
    if (this.slideshow) {
      this.curSlideshow = this.slideshow.params;
    }
  }

  stopSlideshow() {
    clearTimeout(this.ReRunTimer)
    this.curSlideshow = null
  }

  slideComp() {
    this.curSlideshow = null
    console.log("next pres in" + this.slideshow.interval)
    this.ReRunTimer = setTimeout(() => {
      this.startSlideshow()
    }, this.slideshow.interval)
  }

  keypressComp() {
    this.keypress = null;
  }
}

