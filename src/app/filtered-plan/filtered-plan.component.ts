import { Component, OnInit, Input } from '@angular/core';
import * as types from '../util/dataTypes'

@Component({ //TODO: filtered plan template
  selector: 'app-filtered-plan',
  templateUrl: './filtered-plan.component.html',
  styleUrls: ['./filtered-plan.component.css']
})
export class FilteredPlanComponent implements OnInit {
  @Input()
  db: any

  @Input()
  index: any

  @Input()
  filter: any

  constructor() {
  }

  ngOnInit() { }


}
