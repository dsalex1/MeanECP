import { Component, OnInit, Input } from '@angular/core';

@Component({ //TODO: implement plan template
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  @Input()
  plan: Object

  constructor() { }

  ngOnInit() {
  }

}
