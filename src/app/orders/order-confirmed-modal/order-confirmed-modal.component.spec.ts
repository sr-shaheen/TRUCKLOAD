import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmedModalComponent } from './order-confirmed-modal.component';

describe('OrderConfirmedModalComponent', () => {
  let component: OrderConfirmedModalComponent;
  let fixture: ComponentFixture<OrderConfirmedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfirmedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
