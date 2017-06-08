import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({ //TODO: multiple plan template
  selector: 'app-multiple-plan',
  templateUrl: './multiple-plan.component.html',
  styleUrls: ['./multiple-plan.component.css']
})
export class MultiplePlanComponent implements OnInit {

  @Input()
  db: any

  @Input()
  firstIndex: any

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

