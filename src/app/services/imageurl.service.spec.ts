import { TestBed } from '@angular/core/testing';

import { ImageurlService } from './imageurl.service';

describe('ImageurlService', () => {
  let service: ImageurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
