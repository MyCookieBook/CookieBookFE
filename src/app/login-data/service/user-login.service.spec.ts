import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginService } from './user-login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('UserLoginService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserLoginService]
    });
  });

  it('should be created', () => {
    const service: UserLoginService = TestBed.get(UserLoginService);
    expect(service).toBeTruthy();
  });
});
