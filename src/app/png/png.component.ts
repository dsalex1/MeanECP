import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-png',
  templateUrl: './png.component.html',
  styleUrls: ['./png.component.css']
})
export class PngComponent implements OnInit {

  @Input()
  file: any

  noImg = false;

  imgErr() {
    this.noImg = true;
    console.log("noimg!!!!!!!!!!")
  }
  constructor() {
  }


  ngOnInit() {
  }
}
