import { TestBed } from '@angular/core/testing';

import { EmployeeimageuploadService } from './employeeimageupload.service';

describe('EmployeeimageuploadService', () => {
  let service: EmployeeimageuploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeimageuploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
