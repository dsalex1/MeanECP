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

  ngOnInit() {
    console.log("has inited and 10 counts left to reload")
  }

  MemCounter = 10

  ngOnChanges() {
    if (!this.keyevt) return;
    this.MemCounter = this.MemCounter - 1
    console.log("" + this.MemCounter + " counts left to reload")
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
          "timeout": 15000
        }
      }
    }
    else if (cmd == "p" || cmd == "P") {
      this.data = {
        "type": "Png",
        "params": {
          "file": "./assets/images/" + param,
          "timeout": 15000
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
      if (this.MemCounter < 1)
        window.location.reload()
      this.completed.emit();
    }, this.data.params.timeout)
  }

}
