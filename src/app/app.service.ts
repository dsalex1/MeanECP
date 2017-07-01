import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

import * as types from './util/dataTypes'
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getInitialData(): Observable<any> {
    return this.getConfigData()
      .flatMap((data) =>
        Observable.timer(0, data["pollInterval"])
          .switchMap(() => this.http.get('/api/JSON/ClientConfig')
            .map(res => res.json()))
          .distinctUntilChanged((a, b) => JSON.stringify(a) == JSON.stringify(b))
      );
  }


  getConfigData(): Observable<any> {
    return this.http.get('/api/JSON/ServerConfig')
      .map(res => res.json());
  }

  getJsonData(file: string): Observable<any> {
    return this.getConfigData()
      .flatMap((data) =>
        Observable.timer(0, data["pollInterval"])
          .switchMap(() => this.http.get(file)
            .map(res => res.json()))
          .distinctUntilChanged((a, b) => JSON.stringify(a) == JSON.stringify(b))
      );
  }

  getKeyCodeData() {
    return this.getConfigData()
      .flatMap((data) =>
        Observable.timer(0, data["pollInterval"])
          .switchMap(() => this.http.get('/api/JSON/KeyCodeConfig')
            .map(res => res.json()))
          .distinctUntilChanged((a, b) => JSON.stringify(a) == JSON.stringify(b))
      );
  }

  data: any
  setRoutingData(data: any) {
    this.data = data
  }

  getRoutingData() {
    return this.data;
  }
}