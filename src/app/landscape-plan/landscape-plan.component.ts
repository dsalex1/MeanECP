import { Component, OnInit, OnChanges, Input, HostListener } from '@angular/core';
import { AppService } from '../app.service'

@Component({
  selector: 'app-landscape-plan',
  templateUrl: './landscape-plan.component.html',
  styleUrls: ['./landscape-plan.component.css']
})
export class LandscapePlanComponent implements OnInit, OnChanges {

  @Input()
  db: any

  @Input()
  index1: any

  @Input()
  index2: any

  @Input()
  slideshow: any

  @Input()
  keypress: string = null

  leftPlan: object

  rightPlan: object

  curSlideshow = null

  state: string

  footer: any

  constructor(private _appService: AppService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this._appService.getJsonData(this.db).subscribe((data) => {
      this.leftPlan = data[this.index1];
      this.rightPlan = data[this.index2];
      this.state = this.leftPlan["Stand"]["Inhalt"]
      this.footer = this.leftPlan["Footer"]
    })
    this.setupSlide()
  }

  slideComp() {
    this.curSlideshow = null;
    this.setupSlide();
  }

  SlidTimer: number
  setupSlide() {
    if (this.slideshow) {
      var begin = this.slideshow.timeStart ? Date.parse(this.slideshow.timeStart) : null
      var end = this.slideshow.timeEnd ? Date.parse(this.slideshow.timeEnd) : null
      //console.log("slid")
      //console.log(this.slideshow)
      //console.log((!begin || begin < Date.now()))
      //console.log((!end || end > Date.now()))
      if (this.slideshow && (!begin || begin < Date.now()) && (!end || end > Date.now())) {
        setTimeout(() => {
          this.curSlideshow = this.slideshow.params
        }, this.slideshow.interval)
      } else {
        //console.log("not in time")
        if (begin && begin > Date.now()) {
          //console.log("start timer " + (begin - Date.now()))
          clearTimeout(this.SlidTimer)
          this.SlidTimer = setTimeout(this.setupSlide(), begin - Date.now())
        } //FIXME: time start/end
      }
    }
  }

  keypressComp() {
    this.keypress = null;
  }
}

