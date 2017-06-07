import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AppService } from '../app.service';
import { Observable } from 'rxjs/Rx';
import { KeyService } from '../util/key.service'
import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/forkJoin'

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  route = null
  errData = null
  errType = null
  timer: any

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _appService: AppService,
    private _keyService: KeyService) {

    this.route = _route.snapshot.url
    this.errData = _appService.getRoutingData().params
    this.errType = _appService.getRoutingData().type
  }
  ngOnInit() {
    Observable
      .forkJoin(this._appService.getInitialData(),
      this._appService.getConfigData())
      .subscribe(joined => {
        var page = joined[0];
        var config = joined[1]
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this._appService.setRoutingData(page.params)
          this._router.navigate([page.type + "#" + Math.random()]);
        }
          , config.ErrPageDuration);
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
