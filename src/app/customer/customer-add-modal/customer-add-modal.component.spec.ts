import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddModalComponent } from './customer-add-modal.component';

describe('CustomerAddModalComponent', () => {
  let component: CustomerAddModalComponent;
  let fixture: ComponentFixture<CustomerAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
