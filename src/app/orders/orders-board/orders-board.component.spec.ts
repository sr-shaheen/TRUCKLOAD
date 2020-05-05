import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersBoardComponent } from './orders-board.component';

describe('OrdersBoardComponent', () => {
  let component: OrdersBoardComponent;
  let fixture: ComponentFixture<OrdersBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
