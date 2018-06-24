import { TestBed, inject } from '@angular/core/testing';

import { UserInfoShareService } from './user-info-share.service';

describe('UserInfoShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserInfoShareService]
    });
  });

  it('should be created', inject([UserInfoShareService], (service: UserInfoShareService) => {
    expect(service).toBeTruthy();
  }));
});
