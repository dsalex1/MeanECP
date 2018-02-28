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

  @Input()
  type: string

  @Input()
  sorting: Array<string>

  @Input()
  hideAnnot: Boolean

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
    console.log(this.plan)
    if (this.plan)
      this.plan = Object.assign({}, this.plan);
    console.log(this.plan)
    if (this.plan && this.filter) this.plan['Vertretungen'] = this.plan['Vertretungen'].filter((exchg) => {
      var regex = new RegExp("(^|[^a-zA-ZäöüßÄÖÜ])" + this.filter + "(?![a-zA-ZäöüßÄÖÜ])") // \b matches before and behind 'ö'
      for (var key in exchg) {
        var prop = exchg[key]
        if (regex.test(prop))
          return true;
      }
      return false;
    });

    if (this.plan && this.sorting) this.sorting.forEach(column => {
      console.log("start sorting")
      this.plan['Vertretungen'] = this.stableSort(this.plan['Vertretungen'], (n1, n2) => {
        //console.log(n1[column]+" "+n2[column]+" "+(n1[column] > n2[column])+"  "+column)
        //console.log(n1)
        if (n1[column] > n2[column]) {
          return 1;
        }
        if (n1[column] < n2[column]) {
          return -1;
        }
        return 0;
      });
      console.log("sorting done")
    });

    if (this.ExcCont && this.ScrCont) {
      this.skeduleAdHeig();
    }
  }

  ngAfterViewInit() {
    this.skeduleAdHeig();
  }

  setheighttimer: any
  skeduleAdHeig() {
    clearTimeout(this.setheighttimer)
    this.setheighttimer = setTimeout(() => {
      try {
        this.isScrolling = false
        this.scrollingCopies = [0]
        $(this.ScrCont.nativeElement).find(".exchangeTable").first().css({ "margin-top": "0px" });
        $(this.ScrCont.nativeElement).find(".exchangeTable").first().velocity("stop");
        this.adjustHeights();
      }
      catch (e) {
        this.skeduleAdHeig();
      }
    }, 50);
  }

  adjustHeights() {
    //console.log(this.ScrCont.nativeElement.offsetHeight + " " + this.ExcCont.nativeElement.offsetHeight)

    if (this.ScrCont.nativeElement.offsetHeight > this.ExcCont.nativeElement.offsetHeight) {
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
    }, 30 * this.scrollHeight, 'linear', this.loop.bind(this));
  }

  stableSort(arr, cmpFunc) {
    //wrap the arr elements in wrapper objects, so we can associate them with their origional starting index position
    var arrOfWrapper = arr.map(function (elem, idx) {
      return { elem: elem, idx: idx };
    });

    //sort the wrappers, breaking sorting ties by using their elements orig index position
    arrOfWrapper.sort(function (wrapperA, wrapperB) {
      var cmpDiff = cmpFunc(wrapperA.elem, wrapperB.elem);
      return cmpDiff === 0
        ? wrapperA.idx - wrapperB.idx
        : cmpDiff;
    });

    //unwrap and return the elements
    return arrOfWrapper.map(function (wrapper) {
      return wrapper.elem;
    });
  }
}
