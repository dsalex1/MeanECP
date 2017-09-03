import { Component, OnChanges, Input } from '@angular/core';
import { AppService } from '../app.service'

@Component({
  selector: 'app-filtered-plan',
  templateUrl: './filtered-plan.component.html',
  styleUrls: ['./filtered-plan.component.css']
})
export class FilteredPlanComponent implements OnChanges {
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

  ngOnChanges() {
    this._appService.getJsonData(this.db).subscribe((data) => {
      var tmpPlans = JSON.parse(JSON.stringify(data.slice(this.firstIndex)));
      tmpPlans.forEach(plan => {
        plan["Abwesenheiten"]=[]
      });
      this.plans=tmpPlans;
      this.state = this.plans[0]["Stand"]["Inhalt"]
      this.footer = this.plans[0]["Footer"]
    })
  }

}
