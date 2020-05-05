import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTargetValueComponent } from './admin-target-value.component';

describe('AdminTargetValueComponent', () => {
  let component: AdminTargetValueComponent;
  let fixture: ComponentFixture<AdminTargetValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTargetValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTargetValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
