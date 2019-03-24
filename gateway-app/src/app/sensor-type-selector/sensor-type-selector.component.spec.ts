import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorTypeSelectorComponent } from './sensor-type-selector.component';

describe('SensorTypeSelectorComponent', () => {
  let component: SensorTypeSelectorComponent;
  let fixture: ComponentFixture<SensorTypeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorTypeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
