import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialinformationacceptedComponent } from './confidentialinformationaccepted.component';

describe('ConfidentialinformationacceptedComponent', () => {
  let component: ConfidentialinformationacceptedComponent;
  let fixture: ComponentFixture<ConfidentialinformationacceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentialinformationacceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialinformationacceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
