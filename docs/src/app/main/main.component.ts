import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var i=0;
    setInterval(()=>{
      if (i==$("#background").children().length-1){
        i=0;
        $("#background").children().css("display","block")
      }
      $($("#background").children()[i]).fadeOut(2000)
      i=i+1;
    },10000)
  }

}
