import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCompletedTripComponent } from './total-completed-trip.component';

describe('TotalCompletedTripComponent', () => {
  let component: TotalCompletedTripComponent;
  let fixture: ComponentFixture<TotalCompletedTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalCompletedTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCompletedTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
