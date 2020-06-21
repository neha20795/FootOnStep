import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreviewbyemployeeComponent } from './addreviewbyemployee.component';

describe('AddreviewbyemployeeComponent', () => {
  let component: AddreviewbyemployeeComponent;
  let fixture: ComponentFixture<AddreviewbyemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreviewbyemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreviewbyemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
