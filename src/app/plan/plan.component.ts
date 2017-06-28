import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit, OnChanges {

  @Input()
  plan: object

  @Input()
  filter: string

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.filter) this.plan['Vertretungen'] = this.plan['Vertretungen'].filter((exchg) => {
      var regex = new RegExp("\\b" + this.filter + "\\b")
      for (var key in exchg) {
        var prop = exchg[key]
        //console.log(prop)
        if (regex.test(prop))
          return true;
      }
      return false;
    });
  }
}
