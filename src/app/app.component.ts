import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {AppService} from './app.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit{

  constructor(private _appService:AppService,
              private _router:Router){}

  ngOnInit(): void {
    console.log("init")
      this._appService.getInitialData().subscribe(page =>{
      this._appService.setRoutingData(page.planParams)
      this._router.navigate([page.type]);
    })
  }

  title = 'app does work!';
}
