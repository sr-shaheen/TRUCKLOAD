import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckAddModalComponent } from './truck-add-modal.component';

describe('TruckAddModalComponent', () => {
  let component: TruckAddModalComponent;
  let fixture: ComponentFixture<TruckAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
