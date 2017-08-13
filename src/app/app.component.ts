import { Component, HostListener } from '@angular/core';
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

  data: any
  type: any
  params: any

  keySubmit: String = ""

  keyInput: string = ""

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this._appService.getInitialData().subscribe((data) => {
      if (data["Reload"]) {
        window.location.reload();
        console.log("RELOAD!")
      }
      this.data = data;
      this.type = this.data.type;
      this.params = this.data.params
    }, err => { console.log(err) });
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(ev: KeyboardEvent) {
    if (ev.keyCode == 8) {
      this.keyInput = this.keyInput.slice(0, -1);
    }
  }

  @HostListener('window:keypress', ['$event'])
  onKeyPress(ev: KeyboardEvent) {
    if (ev.keyCode == 13) {
      this.keySubmit = this.keyInput
      this.keyInput = ""
    } else {
      this.keyInput = this.keyInput + String.fromCharCode(ev.which)
    }
  }

  onKeySubmit() {
    console.log(this.keyInput);
  }
}
