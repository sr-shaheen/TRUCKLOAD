import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetValueComponent } from './target-value.component';

describe('TargetValueComponent', () => {
  let component: TargetValueComponent;
  let fixture: ComponentFixture<TargetValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
