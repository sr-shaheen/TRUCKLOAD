import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossProfitComponent } from './gross-profit.component';

describe('GrossProfitComponent', () => {
  let component: GrossProfitComponent;
  let fixture: ComponentFixture<GrossProfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrossProfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrossProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
