import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({ //TODO: landscaoe plan template
  selector: 'app-landscape-plan',
  templateUrl: './landscape-plan.component.html',
  styleUrls: ['./landscape-plan.component.css']
})
export class LandscapePlanComponent implements OnInit {

  @Input()
  db: any

  @Input()
  index1: any

  @Input()
  index2: any

  @Input()
  slideshow: any

  keypress: KeyboardEvent = null

  curSlideshow = null

  constructor() {
  }

  ngOnInit() {
    this.setupSlide()
  }

  slideComp() {
    this.curSlideshow = null;
    this.setupSlide();
  }

  setupSlide() {
    console.log(this.slideshow)
    if (this.slideshow) {
      setTimeout(() => {
        this.curSlideshow = this.slideshow.params
      }, this.slideshow.interval)
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    this.keypress = ev;
    console.log(this.keypress)
  }

  keypressComp() {
    this.keypress = null;
  }
}

