import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-keypress',
  templateUrl: './keypress.component.html',
  styleUrls: ['./keypress.component.css']
})
export class KeypressComponent implements OnInit, OnChanges {

  @Input()
  keyevt: KeyboardEvent

  @Output()
  completed = new EventEmitter();


  keyCode: number

  timer: any

  data: any = {}
  params: any = {}
  constructor(private _appservice: AppService) { }

  ngOnInit() { }

  ngOnChanges() {
    this.keyCode = this.keyevt.keyCode;

    this._appservice.getKeyCodeData().subscribe((data) => {
      this.data = data[this.keyCode]
      if (this.data == null) {
        this.data = {
          params: { timeout: 5000 },
          type: "INDEX_NOT_FOUND",
          index: this.keyCode
        }
      }

      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.completed.emit();
      }, this.data.params.timeout)
    })
  }

}
