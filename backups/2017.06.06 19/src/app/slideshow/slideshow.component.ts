import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router'
import * as types from '../util/dataTypes'

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  data: types.PresParams;

  constructor(private _appService: AppService,
    private _router: Router) {
  }

  ngOnInit() {
    this.data = this._appService.getRoutingData();
    setTimeout(() => {
      this._router.navigate(['']);
    }
      , this.data.delay * this.data.iterations); //TODO: replace by presentation completion detection
  }
}

