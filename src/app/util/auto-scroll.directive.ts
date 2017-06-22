import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAutoScroll]'
})
export class AutoScrollDirective implements AfterViewInit{

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit(){
        var targetHeight=this.el.nativeElement.offsetHeight
        var contentHeight=this.el.nativeElement.children[0].offsetHeight
        if(contentHeight>targetHeight){
            this.el.nativeElement.style.overflow = 'hidden';
            this.el.nativeElement.style.backgroundColor = "yellow";
        }
    }

}
