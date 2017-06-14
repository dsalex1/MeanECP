import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private _appService: AppService) {
  }

  ngOnInit() { }

  ngOnChanges() {
    this._appService.getJsonData(this.db).subscribe((data) => {
      this.plans = data.slice(this.firstIndex);
    })
  }

}
