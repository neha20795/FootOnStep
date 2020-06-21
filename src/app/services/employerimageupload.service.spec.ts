import { TestBed } from '@angular/core/testing';

import { EmployerimageuploadService } from './employerimageupload.service';

describe('EmployerimageuploadService', () => {
  let service: EmployerimageuploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployerimageuploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
