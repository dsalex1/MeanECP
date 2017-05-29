import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  
  route=null

  constructor(private _route:ActivatedRoute) {
    this.route=_route.snapshot.url
  }


  ngOnInit(){

  }

}
