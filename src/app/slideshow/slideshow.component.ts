import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, OnChanges {

  @Input()
  id: any

  @Input()
  iterations: any

  @Input()
  delay: any

  @Output()
  completed = new EventEmitter();

  url: string

  constructor(public _DomSanitizer: DomSanitizer) { }

  ngOnInit() {
    setTimeout(() => {
      this.completed.emit();
    }, 40000) //TODO: replace by slideshow finish detection
  }

  ngOnChanges() {
    this.url = "./presentation/d/" + this.id + "/embed?start=true&loop=true&delayms=" + this.delay;
  }
}

