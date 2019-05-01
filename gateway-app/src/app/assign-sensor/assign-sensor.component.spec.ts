import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSensorComponent } from './assign-sensor.component';

describe('AssignSensorComponent', () => {
  let component: AssignSensorComponent;
  let fixture: ComponentFixture<AssignSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
