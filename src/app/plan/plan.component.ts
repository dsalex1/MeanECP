import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { AutoScroll } from '../util/autoScroll'

declare var $: any

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit, OnChanges, AfterViewInit {

  @Input()
  plan: object

  @Input()
  filter: string

  @ViewChild('ExcCont')
  ExcCont: ElementRef

  @ViewChild('ScrCont')
  ScrCont: ElementRef

  @ViewChild('ScrHead')
  ScrHead: ElementRef

  hasChanges = false;

  isScrolling = true

  scrollingCopies = [0];

  scrollHeight = 0

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.filter) this.plan['Vertretungen'] = this.plan['Vertretungen'].filter((exchg) => {
      var regex = new RegExp("\\b" + this.filter + "\\b")
      for (var key in exchg) {
        var prop = exchg[key]
        if (regex.test(prop))
          return true;
      }
      return false;
    });

    if (this.ExcCont && this.ScrCont) {
      this.skeduleAdHeig();
    }
  }

  ngAfterViewInit() {
    this.skeduleAdHeig();
  }


  skeduleAdHeig() {
    setTimeout(() => {
      this.isScrolling = false
      this.scrollingCopies = [0]
      $(this.ScrCont.nativeElement).find(".exchangeTable").first().css({ "margin-top": "0px" });
      $(this.ScrCont.nativeElement).find(".exchangeTable").first().velocity("stop");
      this.adjustHeights();
    }, 0);
  }

  adjustHeights() {
    //console.log(this.ScrCont.nativeElement.offsetHeight + " " + this.ExcCont.nativeElement.offsetHeight)

    if (this.ScrCont.nativeElement.offsetHeight > this.ExcCont.nativeElement.offsetHeight) {
      //FIXME: Headline disapears when switching from isScrolling==true to isScrolling==false
      this.scrollHeight = this.ScrCont.nativeElement.offsetHeight
      console.log("scrollheight,ad.Hei.:" + this.scrollHeight)
      this.isScrolling = true
      this.scrollingCopies = [0, 0]


      var ScrHead = this.ScrHead.nativeElement
      var ScrCont = this.ScrCont.nativeElement
      $(ScrCont).find('.headline').find('td').each(function (index, width) {
        $(ScrHead).children().eq(index).width($(this).width())
      });
      this.loop();
    }
  }

  loop() {
    console.log("scrollheight,loop:" + this.scrollHeight)
    $(this.ScrCont.nativeElement).find(".exchangeTable").first().css({ "margin-top": "0px" });
    $(this.ScrCont.nativeElement).find(".exchangeTable").first().velocity({
      "margin-top": "-=" + this.scrollHeight + "px",
    }, 20 * this.scrollHeight, 'linear', this.loop.bind(this));
  }
}
