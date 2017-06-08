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

  ngOnChanges() {
    //this.url = "./presentation/d/" + this.id + "/embed?start=true&loop=true&delayms=" + this.delay;
    this.url = "./presentation/d/" + this.id + "/embed?start=true&loop=true&delayms=" + this.delay;
  }

  ngOnInit() {
    setTimeout(() => {
      this.completed.emit();
    }, 5000)

    /*setTimeout(() => {
      this.watchIterations()
    }, 25000);*/
  }



  iterationsPass: number = 0
  watchIterations() {
    eval('console.log("start watching")')//FIXME: observing does work in browser console but not as script...idk why
    eval(`
    var target = document.getElementById('slideshow').contentWindow.document.getElementsByClassName('punch-viewer-nav-v2')[0].getElementsByTagName("div")[0];
    var observer = new MutationObserver((mutation) => { console.warn(mutation) })
    observer.observe(target, { attributes: true })`)
    eval(`
    var target = document.getElementById('slideshow').contentWindow.document.getElementsByClassName('punch-viewer-nav')[0].getElementsByTagName("div")[0];
    var observer = new MutationObserver((mutation) => { console.warn(mutation) })
    observer.observe(target, { attributes: true })`)
    eval('console.log("eval test")')
    /*try {
    
      var target = (<HTMLIFrameElement>document.getElementById('slideshow')).contentWindow.document.getElementsByClassName('punch-viewer-nav')[0].getElementsByTagName("div")[0];
    } catch (err) {
      console.log("ERROR while targeting")
      setTimeout(() => {
        this.watchIterations()
      }, 1000);
      return;
    }
    console.warn(target)
    //}
    try {
      var observer = new MutationObserver((mutation) => {
        console.warn(mutation)
        if (mutation.length == 4) { //FIXME: observed behavior, 4 mutations on target are made once the presentation has finished - replace by more stable approach
          this.iterationsPass = this.iterationsPass + 1;
          console.log(this.iterationsPass + " out of " + this.iterations)
          //if (this.iterations == this.iterationsPass) {
          //window.location.replace("./");
          //}
        }
      })
      // configuration of the observer:
      var config = {
        attributes: true // this is to watch for attribute changes.
      };
      // pass in the element you wanna watch as well as the options
      observer.observe(target, config);
      console.warn("is observing")
      console.warn(observer)
    } catch (err) {
      console.warn(err)
    }*/

  }


}

