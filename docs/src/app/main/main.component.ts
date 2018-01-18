/*
Author: dsalex1
Author URI: https://github.com/dsalex1/MeanECP/tree/master/docs
Description: Main page, slides animation
*/

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

    //every 10 seconds fade current img out so the next appears underneath it
    var i=0;
    setInterval(()=>{
      if (i==$("#background").children().length-1){ //if the last img is reached reset all opacities and start over
        i=0;
        $("#background").children().css("display","block")
      }
      $($("#background").children()[i]).fadeOut(2000) //fade i'th img out
      i=i+1;
    },10000)
  }

}
