import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialinformationreceivedComponent } from './confidentialinformationreceived.component';

describe('ConfidentialinformationreceivedComponent', () => {
  let component: ConfidentialinformationreceivedComponent;
  let fixture: ComponentFixture<ConfidentialinformationreceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentialinformationreceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialinformationreceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
