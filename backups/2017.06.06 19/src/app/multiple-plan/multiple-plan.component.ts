import { Component, OnInit, HostListener } from '@angular/core';
import { AppService } from '../app.service';
import { KeyService } from '../util/key.service'
import { Router } from '@angular/router'
import * as types from '../util/dataTypes'
@Component({
  selector: 'app-multiple-plan',
  templateUrl: './multiple-plan.component.html',
  styleUrls: ['./multiple-plan.component.css']
})
export class MultiplePlanComponent implements OnInit {

  data: types.PlanParams;


  constructor(private _appService: AppService,
    private _router: Router,
    private _keyService: KeyService) {
  }

  ngOnInit() {
    this.data = this._appService.getRoutingData();
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    this._keyService.onKeyUp(ev);
  }
}

