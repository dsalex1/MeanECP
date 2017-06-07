import { Injectable } from '@angular/core';
import * as types from '../util/dataTypes'
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Injectable()
export class SlideshowService {

  constructor(private _appService: AppService,
    private _router: Router) { }

  register(pres: types.Presentation) {
    if (pres) { //TODO: implement start and end time checking
      setTimeout(() => {
        this._appService.setRoutingData(pres.page.params)
        this._router.navigate([pres.page.type]);
      }
        , pres.interval);
    }
  }

}