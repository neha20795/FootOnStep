import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreviewbyemployerComponent } from './addreviewbyemployer.component';

describe('AddreviewbyemployerComponent', () => {
  let component: AddreviewbyemployerComponent;
  let fixture: ComponentFixture<AddreviewbyemployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreviewbyemployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreviewbyemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
