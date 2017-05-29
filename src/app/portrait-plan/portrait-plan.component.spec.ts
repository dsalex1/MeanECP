import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitPlanComponent } from './portrait-plan.component';

describe('PortraitPlanComponent', () => {
  let component: PortraitPlanComponent;
  let fixture: ComponentFixture<PortraitPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
