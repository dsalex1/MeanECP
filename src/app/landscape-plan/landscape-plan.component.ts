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

  leftPlan: object

  rightPlan: object

  keypress: KeyboardEvent = null

  curSlideshow = null

  constructor(private _appService: AppService) {
  }

  ngOnInit() {
    this.setupSlide()
  }

  ngOnChanges() {
    this._appService.getJsonData(this.db).subscribe((data) => {
      this.leftPlan = data[this.index1];
      this.rightPlan = data[this.index2];
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

