import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewreceivedComponent } from './reviewreceived.component';

describe('ReviewreceivedComponent', () => {
  let component: ReviewreceivedComponent;
  let fixture: ComponentFixture<ReviewreceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewreceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewreceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
