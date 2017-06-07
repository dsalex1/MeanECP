import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private _appService: AppService,
    private _router: Router) { }

  ngOnInit() {
    this._appService.getInitialData().subscribe(page => {
      this._appService.setRoutingData(page.params)
      this._router.navigate([page.type]);
    })
  }

}
