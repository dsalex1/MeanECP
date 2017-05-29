import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

import {Observable} from 'rxjs/Rx';

@Injectable()
export class AppService {

  constructor(private http: Http) {}

  getInitialData(){
    //return this.http.get('/api/InitialData')
    //.map(res=>res.json());
    return Observable.from([{
        type:"PortraitPlan",                            
        planParams:{
          db:'./schuelerPlan.json',
          index1:0,
          index2:1,
        }
      }]);
  }

  data:any

  setRoutingData(data:any){
    this.data=data
  }

  getRoutingData(){
    return this.data;
  }

}
