import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialinformationdataComponent } from './confidentialinformationdata.component';

describe('ConfidentialinformationdataComponent', () => {
  let component: ConfidentialinformationdataComponent;
  let fixture: ComponentFixture<ConfidentialinformationdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentialinformationdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialinformationdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
