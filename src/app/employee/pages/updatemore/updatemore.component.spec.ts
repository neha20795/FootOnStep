import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemoreComponent } from './updatemore.component';

describe('UpdatemoreComponent', () => {
  let component: UpdatemoreComponent;
  let fixture: ComponentFixture<UpdatemoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
