import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOrdersComponent } from './component-orders.component';

describe('ComponentOrdersComponent', () => {
  let component: ComponentOrdersComponent;
  let fixture: ComponentFixture<ComponentOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
