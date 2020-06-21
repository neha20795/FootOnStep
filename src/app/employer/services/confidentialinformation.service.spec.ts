import { TestBed } from '@angular/core/testing';

import { ConfidentialinformationService } from './confidentialinformation.service';

describe('ConfidentialinformationService', () => {
  let service: ConfidentialinformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfidentialinformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
