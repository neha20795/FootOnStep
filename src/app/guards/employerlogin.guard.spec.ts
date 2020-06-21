import { TestBed } from '@angular/core/testing';

import { EmployerloginGuard } from './employerlogin.guard';

describe('EmployerloginGuard', () => {
  let guard: EmployerloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployerloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
