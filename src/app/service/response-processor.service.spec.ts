import { TestBed, inject } from '@angular/core/testing';

import { ResponseProcessorService } from './response-processor.service';

describe('ResponseProcessorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponseProcessorService]
    });
  });

  it('should be created', inject([ResponseProcessorService], (service: ResponseProcessorService) => {
    expect(service).toBeTruthy();
  }));
});
