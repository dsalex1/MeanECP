import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-landscape-plan',
  templateUrl: './landscape-plan.component.html',
  styleUrls: ['./landscape-plan.component.css']
})
export class LandscapePlanComponent implements OnInit {

  constructor(private _appService:AppService) { }

  data:any

  ngOnInit() {
    this.data=this._appService.getRoutingData();
    console.log("landscape plan:"+this.data)
  }

}
