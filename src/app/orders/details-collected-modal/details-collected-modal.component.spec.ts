import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCollectedModalComponent } from './details-collected-modal.component';

describe('DetailsCollectedModalComponent', () => {
  let component: DetailsCollectedModalComponent;
  let fixture: ComponentFixture<DetailsCollectedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCollectedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCollectedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
