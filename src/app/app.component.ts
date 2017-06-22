import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router'

@Component({ //TODO: overall design
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

  data: any
  type: any
  params: any

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this._appService.getInitialData().subscribe((data) => {
      this.data = data;
      this.type = this.data.type;
      this.params = this.data.params
    });
  }

  title = 'app does work!';
}
