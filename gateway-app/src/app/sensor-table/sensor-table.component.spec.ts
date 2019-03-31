import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorTableComponent } from './sensor-table.component';

describe('SensorTableComponent', () => {
  let component: SensorTableComponent;
  let fixture: ComponentFixture<SensorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
