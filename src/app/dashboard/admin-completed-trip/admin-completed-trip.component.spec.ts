import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompletedTripComponent } from './admin-completed-trip.component';

describe('AdminCompletedTripComponent', () => {
  let component: AdminCompletedTripComponent;
  let fixture: ComponentFixture<AdminCompletedTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompletedTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompletedTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
