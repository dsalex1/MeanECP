import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

import * as types from './util/dataTypes'
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class AppService {//TODO: replace by server data get

  constructor(private http: Http) { }

  getInitialData(): Observable<any> {
    //return this.http.get('/api/InitialData')
    //.map(res=>res.json());
    return Observable.from([]);
  }

  getJsonData(file: String): Observable<any> {
    return Observable.from([]);
  }


  getConfigData(): Observable<any> {
    //return this.http.get('/api/InitialData')
    //.map(res=>res.json());
    return Observable.from([]);
  }
  data: any

  setRoutingData(data: any) {
    this.data = data
  }

  getRoutingData() {
    return this.data;
  }

  getKeyCodeData() {
    return Observable.from([]);
  }
}