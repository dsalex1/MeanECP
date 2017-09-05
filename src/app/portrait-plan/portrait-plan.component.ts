import { Component, AfterViewInit, OnChanges, Input, HostListener } from '@angular/core';
import { AppService } from '../app.service'
@Component({
  selector: 'app-portrait-plan',
  templateUrl: './portrait-plan.component.html',
  styleUrls: ['./portrait-plan.component.css']
})

export class PortraitPlanComponent implements AfterViewInit, OnChanges {

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

  ngAfterViewInit() {
    this._appService.getJsonData(this.db).subscribe((data) => {
      this.plan = data[this.index];
      this.state = this.plan["Stand"]["Inhalt"]
      this.footer = this.plan["Footer"]
    })
  }

  ngOnChanges() {
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
