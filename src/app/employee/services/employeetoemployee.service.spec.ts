import { TestBed } from '@angular/core/testing';

import { EmployeetoemployeeService } from './employeetoemployee.service';

describe('EmployeetoemployeeService', () => {
  let service: EmployeetoemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeetoemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
