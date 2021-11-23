import { TestBed } from '@angular/core/testing';

import { LoginusersService } from './loginusers.service';

describe('LoginusersService', () => {
  let service: LoginusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
