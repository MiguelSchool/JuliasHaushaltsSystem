import { TestBed } from '@angular/core/testing';

import { LoginStateCollectionService } from './login-state-collection.service';

describe('LoginStatusEntityService', () => {
  let service: LoginStateCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginStateCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
