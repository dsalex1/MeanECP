import { Component, OnInit, ViewChild, NgZone, Renderer2, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-time-overlay',
  templateUrl: './time-overlay.component.html',
  styleUrls: ['./time-overlay.component.css']
})
export class TimeOverlayComponent implements OnInit {

  constructor(private zone: NgZone, private renderer: Renderer2, private datePipe: DatePipe) { }

  @ViewChild('dateElem')
  public dateElem: ElementRef;

  dateTime = null

  ngOnInit() {
    this.zone.runOutsideAngular(() => {

      setInterval(() => {

        this.dateTime = Date.now()

        this.renderer.setProperty(this.dateElem.nativeElement, 'innerHTML',
          this.datePipe.transform(this.dateTime, 'HH:mm:ss') +
          "<br/>" +
          this.datePipe.transform(this.dateTime, 'dd.MM.y'));

      }, 1000);

    });

  }

}
