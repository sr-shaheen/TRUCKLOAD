import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMapsComponent } from './component-maps.component';

describe('ComponentMapsComponent', () => {
  let component: ComponentMapsComponent;
  let fixture: ComponentFixture<ComponentMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
