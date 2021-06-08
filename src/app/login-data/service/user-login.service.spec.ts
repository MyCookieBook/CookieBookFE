import { TestBed } from '@angular/core/testing';

import { USerLoginService } from './user-login.service';

describe('USerLoginService', () => {
  let service: USerLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(USerLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
