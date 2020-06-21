import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialinformationComponent } from './confidentialinformation.component';

describe('ConfidentialinformationComponent', () => {
  let component: ConfidentialinformationComponent;
  let fixture: ComponentFixture<ConfidentialinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentialinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
