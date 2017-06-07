import { Component, OnInit, HostListener } from '@angular/core';
import { AppService } from '../app.service';
import { KeyService } from '../util/key.service'
import { Router } from '@angular/router'
import { SlideshowService } from '../slideshow/slideshow.service'
import * as types from '../util/dataTypes'

@Component({
  selector: 'app-portrait-plan',
  templateUrl: './portrait-plan.component.html',
  styleUrls: ['./portrait-plan.component.css']
})
export class PortraitPlanComponent implements OnInit {

  data: types.PlanParams;


  constructor(private _appService: AppService,
    private _router: Router,
    private _slideshowService: SlideshowService,
    private _keyService: KeyService) {
  }

  ngOnInit() {
    this.data = this._appService.getRoutingData();
    this._slideshowService.register(this.data.presentation)
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    this._keyService.onKeyUp(ev);
  }
}
