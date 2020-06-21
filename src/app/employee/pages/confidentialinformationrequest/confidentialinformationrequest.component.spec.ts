import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialinformationrequestComponent } from './confidentialinformationrequest.component';

describe('ConfidentialinformationrequestComponent', () => {
  let component: ConfidentialinformationrequestComponent;
  let fixture: ComponentFixture<ConfidentialinformationrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentialinformationrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialinformationrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
