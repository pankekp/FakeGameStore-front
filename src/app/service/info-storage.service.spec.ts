import { TestBed, inject } from '@angular/core/testing';

import { InfoStorageService } from './info-storage.service';

describe('InfoStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoStorageService]
    });
  });

  it('should be created', inject([InfoStorageService], (service: InfoStorageService) => {
    expect(service).toBeTruthy();
  }));
});
