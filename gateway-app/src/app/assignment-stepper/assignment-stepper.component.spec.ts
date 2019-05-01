import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentStepperComponent } from './assignment-stepper.component';

describe('AssignmentStepperComponent', () => {
  let component: AssignmentStepperComponent;
  let fixture: ComponentFixture<AssignmentStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
