import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDashboardComponent } from './component-dashboard.component';

describe('ComponentDashboardComponent', () => {
  let component: ComponentDashboardComponent;
  let fixture: ComponentFixture<ComponentDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
