import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

import * as types from './util/dataTypes'
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class AppService {

  constructor(private http: Http,
    private _router: Router) { }

  getInitialData(): Observable<any> {
    //return this.http.get('/api/InitialData')
    //.map(res=>res.json());
    return Observable.from([{ //TODO: replace by server data get
      type: "PortraitPlan",
      params: {
        db: './schuelerPlan.json',
        index1: 0,
        index2: 1,
        /* presentation: {
           interval: 4000,
           timeStart: -1,
           timeEnd: -1,
           page: {
             type: "Slideshow",
             params: {
               id: '1DOeyOhWo9hjwJDhcMJLW8Kb2kA9SEHAGcuSOLNV9sKU',
               iterations: 2,
               delay: 1000
             }
           }
         }*/
      },
    }]);
  }


  getConfigData(): Observable<any> {
    //return this.http.get('/api/InitialData')
    //.map(res=>res.json());
    return Observable.from([{ //TODO: replace by server data get
      ErrPageDuration: 5000,
    }]);
  }
  data: any

  setRoutingData(data: any) {
    this.data = data
  }

  getRoutingData() {
    return this.data;
  }

  getKeyCodeData() {
    return Observable.from([{ //TODO: replace by server data get
      32: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'And', timeout: 5000 } },
      33: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'BS', timeout: 5000 } },
      34: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Ba', timeout: 5000 } },
      35: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Bm', timeout: 5000 } },
      36: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Bi', timeout: 5000 } },
      37: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Bt', timeout: 5000 } },
      38: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Bre', timeout: 5000 } },
      39: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Bru', timeout: 5000 } },
      40: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Dkl', timeout: 5000 } },
      41: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Dw', timeout: 5000 } },
      42: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Ft', timeout: 5000 } },
      43: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Gh', timeout: 5000 } },
      44: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Go', timeout: 5000 } },
      45: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Gr', timeout: 5000 } },
      46: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Gn', timeout: 5000 } },
      47: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Hk', timeout: 5000 } },
      48: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Ht', timeout: 5000 } },
      49: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Ho', timeout: 5000 } },
      50: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Hom', timeout: 5000 } },
      51: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Hh', timeout: 5000 } },
      52: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Jö', timeout: 5000 } },
      53: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Jd', timeout: 5000 } },
      54: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Ka', timeout: 5000 } },
      55: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Ki', timeout: 5000 } },
      56: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Kle', timeout: 5000 } },
      57: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Kf', timeout: 5000 } },
      58: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Km', timeout: 5000 } },
      59: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Ks', timeout: 5000 } },
      60: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Le', timeout: 5000 } },
      61: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Lz', timeout: 5000 } },
      62: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Ma', timeout: 5000 } },
      63: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Mz', timeout: 5000 } },
      64: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Me', timeout: 5000 } },
      65: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Mll', timeout: 5000 } },
      66: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Nm', timeout: 5000 } },
      67: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Ni', timeout: 5000 } },
      68: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Pe', timeout: 5000 } },
      69: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Pm', timeout: 5000 } },
      70: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Pp', timeout: 5000 } },
      71: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Rad', timeout: 5000 } },
      72: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Rm', timeout: 5000 } },
      73: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Rei', timeout: 5000 } },
      74: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Sa', timeout: 5000 } },
      75: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Sh', timeout: 5000 } },
      76: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Sz', timeout: 5000 } },
      77: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Ste', timeout: 5000 } },
      78: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Steffen', timeout: 5000 } },
      79: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Stö', timeout: 5000 } },
      80: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Tg', timeout: 5000 } },
      81: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Ts', timeout: 5000 } },
      82: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Wb', timeout: 5000 } },
      83: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Wi', timeout: 5000 } },
      95: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '05a', timeout: 5000 } },
      96: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '05b', timeout: 5000 } },
      97: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '05c', timeout: 5000 } },
      98: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '05d', timeout: 5000 } },
      99: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '06a', timeout: 5000 } },
      100: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '06b', timeout: 5000 } },
      101: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '06c', timeout: 5000 } },
      102: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '06d', timeout: 5000 } },
      103: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '07a', timeout: 5000 } },
      104: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '07b', timeout: 5000 } },
      105: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '07c', timeout: 5000 } },
      106: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '07d', timeout: 5000 } },
      107: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '08a', timeout: 5000 } },
      108: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '08b', timeout: 5000 } },
      109: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '08c', timeout: 5000 } },
      110: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '08d', timeout: 5000 } },
      111: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '09a', timeout: 5000 } },
      112: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '09b', timeout: 5000 } },
      113: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '09c', timeout: 5000 } },
      114: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: '09d', timeout: 5000 } },
      115: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Ea', timeout: 5000 } },
      116: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Eb', timeout: 5000 } },
      117: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Ec', timeout: 5000 } },
      118: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Ed', timeout: 5000 } },
      119: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Q1a', timeout: 5000 } },
      120: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Q1b', timeout: 5000 } },
      121: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Q1c', timeout: 5000 } },
      122: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Q1d', timeout: 5000 } },
      123: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Q2a', timeout: 5000 } },
      124: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Q2b', timeout: 5000 } },
      125: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Q2c', timeout: 5000 } },
      126: { type: "FilteredPlan", params: { db: './lehrerPlan.json', index1: 0, filter: 'Q2d', timeout: 5000 } },
      144: { type: "Png", params: { 'file': "/images/And.png", timeout: 5000 } },
      145: { type: "Png", params: { 'file': "/images/BS.png", timeout: 5000 } },
      146: { type: "Png", params: { 'file': "/images/Ba.png", timeout: 5000 } },
      147: { type: "Png", params: { 'file': "/images/Bm.png", timeout: 5000 } },
      148: { type: "Png", params: { 'file': "/images/Bi.png", timeout: 5000 } },
      149: { type: "Png", params: { 'file': "/images/Bt.png", timeout: 5000 } },
      150: { type: "Png", params: { 'file': "/images/Bre.png", timeout: 5000 } },
      151: { type: "Png", params: { 'file': "/images/Bru.png", timeout: 5000 } },
      152: { type: "Png", params: { 'file': "/images/Dkl.png", timeout: 5000 } },
      153: { type: "Png", params: { 'file': "/images/Dw.png", timeout: 5000 } },
      154: { type: "Png", params: { 'file': "/images/Ft.png", timeout: 5000 } },
      155: { type: "Png", params: { 'file': "/images/Gh.png", timeout: 5000 } },
      156: { type: "Png", params: { 'file': "/images/Go.png", timeout: 5000 } },
      157: { type: "Png", params: { 'file': "/images/Gr.png", timeout: 5000 } },
      158: { type: "Png", params: { 'file': "/images/Gn.png", timeout: 5000 } },
      159: { type: "Png", params: { 'file': "/images/Hk.png", timeout: 5000 } },
      160: { type: "Png", params: { 'file': "/images/Ht.png", timeout: 5000 } },
      161: { type: "Png", params: { 'file': "/images/Ho.png", timeout: 5000 } },
      162: { type: "Png", params: { 'file': "/images/Hom.png", timeout: 5000 } },
      163: { type: "Png", params: { 'file': "/images/Hh.png", timeout: 5000 } },
      164: { type: "Png", params: { 'file': "/images/Jö.png", timeout: 5000 } },
      165: { type: "Png", params: { 'file': "/images/Jd.png", timeout: 5000 } },
      166: { type: "Png", params: { 'file': "/images/Ka.png", timeout: 5000 } },
      167: { type: "Png", params: { 'file': "/images/Ki.png", timeout: 5000 } },
      168: { type: "Png", params: { 'file': "/images/Kle.png", timeout: 5000 } },
      169: { type: "Png", params: { 'file': "/images/Kf.png", timeout: 5000 } },
      170: { type: "Png", params: { 'file': "/images/Km.png", timeout: 5000 } },
      171: { type: "Png", params: { 'file': "/images/Ks.png", timeout: 5000 } },
      172: { type: "Png", params: { 'file': "/images/Le.png", timeout: 5000 } },
      173: { type: "Png", params: { 'file': "/images/Lz.png", timeout: 5000 } },
      174: { type: "Png", params: { 'file': "/images/Ma.png", timeout: 5000 } },
      175: { type: "Png", params: { 'file': "/images/Mz.png", timeout: 5000 } },
      176: { type: "Png", params: { 'file': "/images/Me.png", timeout: 5000 } },
      177: { type: "Png", params: { 'file': "/images/Mll.png", timeout: 5000 } },
      178: { type: "Png", params: { 'file': "/images/Nm.png", timeout: 5000 } },
      179: { type: "Png", params: { 'file': "/images/Ni.png", timeout: 5000 } },
      180: { type: "Png", params: { 'file': "/images/Pe.png", timeout: 5000 } },
      181: { type: "Png", params: { 'file': "/images/Pm.png", timeout: 5000 } },
      182: { type: "Png", params: { 'file': "/images/Pp.png", timeout: 5000 } },
      183: { type: "Png", params: { 'file': "/images/Rad.png", timeout: 5000 } },
      184: { type: "Png", params: { 'file': "/images/Rm.png", timeout: 5000 } },
      185: { type: "Png", params: { 'file': "/images/Rei.png", timeout: 5000 } },
      186: { type: "Png", params: { 'file': "/images/Sa.png", timeout: 5000 } },
      187: { type: "Png", params: { 'file': "/images/Sh.png", timeout: 5000 } },
      188: { type: "Png", params: { 'file': "/images/Sz.png", timeout: 5000 } },
      189: { type: "Png", params: { 'file': "/images/Ste.png", timeout: 5000 } },
      190: { type: "Png", params: { 'file': "/images/Steffen.png", timeout: 5000 } },
      191: { type: "Png", params: { 'file': "/images/Stö.png", timeout: 5000 } },
      192: { type: "Png", params: { 'file': "/images/Tg.png", timeout: 5000 } },
      193: { type: "Png", params: { 'file': "/images/Ts.png", timeout: 5000 } },
      194: { type: "Png", params: { 'file': "/images/Wb.png", timeout: 5000 } },
      195: { type: "Png", params: { 'file': "/images/Wi.png", timeout: 5000 } },
      207: { type: "Png", params: { 'file': "/images/05a.png", timeout: 5000 } },
      208: { type: "Png", params: { 'file': "/images/05b.png", timeout: 5000 } },
      209: { type: "Png", params: { 'file': "/images/05c.png", timeout: 5000 } },
      210: { type: "Png", params: { 'file': "/images/05d.png", timeout: 5000 } },
      211: { type: "Png", params: { 'file': "/images/06a.png", timeout: 5000 } },
      212: { type: "Png", params: { 'file': "/images/06b.png", timeout: 5000 } },
      213: { type: "Png", params: { 'file': "/images/06c.png", timeout: 5000 } },
      214: { type: "Png", params: { 'file': "/images/06d.png", timeout: 5000 } },
      215: { type: "Png", params: { 'file': "/images/07a.png", timeout: 5000 } },
      216: { type: "Png", params: { 'file': "/images/07b.png", timeout: 5000 } },
      217: { type: "Png", params: { 'file': "/images/07c.png", timeout: 5000 } },
      218: { type: "Png", params: { 'file': "/images/07d.png", timeout: 5000 } },
      219: { type: "Png", params: { 'file': "/images/08a.png", timeout: 5000 } },
      220: { type: "Png", params: { 'file': "/images/08b.png", timeout: 5000 } },
      221: { type: "Png", params: { 'file': "/images/08c.png", timeout: 5000 } },
      222: { type: "Png", params: { 'file': "/images/08d.png", timeout: 5000 } },
      223: { type: "Png", params: { 'file': "/images/09a.png", timeout: 5000 } },
      224: { type: "Png", params: { 'file': "/images/09b.png", timeout: 5000 } },
      225: { type: "Png", params: { 'file': "/images/09c.png", timeout: 5000 } },
      226: { type: "Png", params: { 'file': "/images/09d.png", timeout: 5000 } },
      227: { type: "Png", params: { 'file': "/images/Ea.png", timeout: 5000 } },
      228: { type: "Png", params: { 'file': "/images/Eb.png", timeout: 5000 } },
      229: { type: "Png", params: { 'file': "/images/Ec.png", timeout: 5000 } },
      230: { type: "Png", params: { 'file': "/images/Ed.png", timeout: 5000 } },
      231: { type: "Png", params: { 'file': "/images/Q1a.png", timeout: 5000 } },
      232: { type: "Png", params: { 'file': "/images/Q1b.png", timeout: 5000 } },
      233: { type: "Png", params: { 'file': "/images/Q1c.png", timeout: 5000 } },
      234: { type: "Png", params: { 'file': "/images/Q1d.png", timeout: 5000 } },
      235: { type: "Png", params: { 'file': "/images/Q2a.png", timeout: 5000 } },
      236: { type: "Png", params: { 'file': "/images/Q2b.png", timeout: 5000 } },
      237: { type: "Png", params: { 'file': "/images/Q2c.png", timeout: 5000 } },
      238: { type: "Png", params: { 'file': "/images/Q2d.png", timeout: 5000 } }
    }]);
  }
}