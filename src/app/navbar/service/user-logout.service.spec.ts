import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserLogoutService } from './user-logout.service';

describe('UserLogoutService', () => {
  let service: UserLogoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule],
      providers: [UserLogoutService]});
    service = TestBed.inject(UserLogoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
