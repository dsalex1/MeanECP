import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-keypress',
  templateUrl: './keypress.component.html',
  styleUrls: ['./keypress.component.css']
})
export class KeypressComponent implements OnInit, OnChanges {

  @Input()
  keyevt: String

  @Output()
  completed = new EventEmitter();


  keyCode: number

  timer: any

  data: any = {}
  params: any = {}
  constructor(private _appservice: AppService) { }

  ngOnInit() { }

  ngOnChanges() {
    console.log("CHARS ARRIVED: " + this.keyevt)
    var cmd = this.keyevt.split('|')[0]
    var param = this.keyevt.split('|')[1]

    if (cmd == "f" || cmd == "F") {
      this.data = {
        "type": "FilteredPlan",
        "params": {
          "db": "./api/JSON/LehrerPlan",
          "index1": 0,
          "filter": param,
          "timeout": 5000
        }
      }
    }
    else if (cmd == "p" || cmd == "P") {
      this.data = {
        "type": "Png",
        "params": {
          "file": "./assets/images/" + param,
          "timeout": 5000
        }
      }
    } else {
      this.data = {
        params: { timeout: 5000 },
        type: "CMD_NOT_FOUND",
        index: this.keyCode
      }
    }

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.completed.emit();
    }, this.data.params.timeout)
  }

}
