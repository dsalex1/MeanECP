import { Injectable } from '@angular/core';
import { HostListener } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router'

@Injectable()
export class KeyService {

  constructor(private _appService: AppService,
    private _router: Router) {
  }

  onKeyUp(ev: KeyboardEvent) {
    console.log(`The user just pressed ${ev.key}!`);
    this._appService.getKeyCodeData().subscribe(keyCodes => {
      var page = keyCodes[ev.keyCode]
      if (page) {
        console.log("redirect");
        this._appService.setRoutingData(page.params)
        this._router.navigate([page.type]);
      } else {
        console.log("not found");
        this._router.navigate(['notFound']);
        this._appService.setRoutingData({ type: "ABBR_NOT_FOUND", params: { keyCode: ev.keyCode } })
      }
    })
  }

}
