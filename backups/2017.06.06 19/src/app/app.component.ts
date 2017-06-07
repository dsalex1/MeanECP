import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  title = 'app does work!';
}
