import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({ //TODO: portrait plan template
  selector: 'app-portrait-plan',
  templateUrl: './portrait-plan.component.html',
  styleUrls: ['./portrait-plan.component.css']
})

export class PortraitPlanComponent implements OnInit {

  @Input()
  db: any

  @Input()
  index: any

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
