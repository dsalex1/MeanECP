import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AppService } from '../app.service'

@Component({
  selector: 'app-filtered-plan',
  templateUrl: './filtered-plan.component.html',
  styleUrls: ['./filtered-plan.component.css']
})
export class FilteredPlanComponent implements OnInit {
  @Input()
  db: any

  @Input()
  firstIndex: any

  @Input()
  filter: any

  plans: any

  state: string

  footer: any

  constructor(private _appService: AppService) {
  }
  ngOnInit() {
    this._appService.getJsonData(this.db).subscribe((data) => {
      this.plans = data.slice(this.firstIndex);
      this.state = this.plans[0]["Stand"]["Inhalt"]
      this.footer = this.plans[0]["Footer"]
    })
  }

}
