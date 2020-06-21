import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialinformationsentComponent } from './confidentialinformationsent.component';

describe('ConfidentialinformationsentComponent', () => {
  let component: ConfidentialinformationsentComponent;
  let fixture: ComponentFixture<ConfidentialinformationsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentialinformationsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialinformationsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
