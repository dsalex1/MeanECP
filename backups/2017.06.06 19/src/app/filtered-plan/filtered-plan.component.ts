import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { AppService } from '../app.service';
import { KeyService } from '../util/key.service'
import { Router } from '@angular/router'
import * as types from '../util/dataTypes'

@Component({
  selector: 'app-filtered-plan',
  templateUrl: './filtered-plan.component.html',
  styleUrls: ['./filtered-plan.component.css']
})
export class FilteredPlanComponent implements OnInit, OnDestroy {

  data: any; //types.KeyEvtParams; TODO: why the hell doesnt that work...it is a god damn exported member of dataTypes
  timer: any

  constructor(private _appService: AppService,
    private _router: Router,
    private _keyService: KeyService) {
  }

  ngOnInit() {
    this.data = this._appService.getRoutingData();

    this._appService.getInitialData()
      .subscribe(page => {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this._appService.setRoutingData(page.params)
          this._router.navigate([page.type]);
        }
          , this.data.timeout);
      });
  }

  ngOnDestroy() {
    console.log("destroyed")
    clearTimeout(this.timer)
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    this._keyService.onKeyUp(ev);
  }


}
