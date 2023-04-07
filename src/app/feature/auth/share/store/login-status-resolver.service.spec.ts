import { TestBed } from '@angular/core/testing';

import { LoginStatusResolver } from './login-status-resolver.service';

describe('LoginStatusResolverService', () => {
  let service: LoginStatusResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginStatusResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
