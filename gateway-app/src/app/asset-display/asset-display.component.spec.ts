import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDisplayComponent } from './asset-display.component';

describe('AssetDisplayComponent', () => {
  let component: AssetDisplayComponent;
  let fixture: ComponentFixture<AssetDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
