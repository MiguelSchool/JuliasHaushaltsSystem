import { TestBed } from '@angular/core/testing';

import { LoginStatusDataService } from './login-status-data.service';

describe('EntityDataService', () => {
  let service: LoginStatusDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginStatusDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
