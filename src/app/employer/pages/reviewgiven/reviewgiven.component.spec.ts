import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewgivenComponent } from './reviewgiven.component';

describe('ReviewgivenComponent', () => {
  let component: ReviewgivenComponent;
  let fixture: ComponentFixture<ReviewgivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewgivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewgivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
