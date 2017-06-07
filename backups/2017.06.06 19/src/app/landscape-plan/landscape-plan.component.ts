import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router'
import { SlideshowService } from '../slideshow/slideshow.service'
import * as types from '../util/dataTypes'

@Component({
  selector: 'app-landscape-plan',
  templateUrl: './landscape-plan.component.html',
  styleUrls: ['./landscape-plan.component.css']
})
export class LandscapePlanComponent implements OnInit {

  data: types.PlanParams;

  constructor(private _appService: AppService,
    private _router: Router,
    private _slideshowService: SlideshowService) {
  }

  ngOnInit() {
    this.data = this._appService.getRoutingData();
    this._slideshowService.register(this.data.presentation)
  }

}

