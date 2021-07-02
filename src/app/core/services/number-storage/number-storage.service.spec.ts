import { TestBed } from '@angular/core/testing';

import { NumberStorageService } from './number-storage.service';

describe('NumberStorageService', () => {
  let service: NumberStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
