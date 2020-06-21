import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconfidentialinformationComponent } from './addconfidentialinformation.component';

describe('AddconfidentialinformationComponent', () => {
  let component: AddconfidentialinformationComponent;
  let fixture: ComponentFixture<AddconfidentialinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddconfidentialinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddconfidentialinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
