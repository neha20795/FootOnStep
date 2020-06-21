import { TestBed } from '@angular/core/testing';

import { EmployeetoemployerService } from './employeetoemployer.service';

describe('EmployeetoemployerService', () => {
  let service: EmployeetoemployerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeetoemployerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
