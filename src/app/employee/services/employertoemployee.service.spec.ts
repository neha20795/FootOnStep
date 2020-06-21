import { TestBed } from '@angular/core/testing';

import { EmployertoemployeeService } from './employertoemployee.service';

describe('EmployeetoemployerService', () => {
  let service: EmployertoemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployertoemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
