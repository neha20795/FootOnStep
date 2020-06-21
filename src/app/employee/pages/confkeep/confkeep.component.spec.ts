import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfkeepComponent } from './confkeep.component';

describe('ConfkeepComponent', () => {
  let component: ConfkeepComponent;
  let fixture: ComponentFixture<ConfkeepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfkeepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfkeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
