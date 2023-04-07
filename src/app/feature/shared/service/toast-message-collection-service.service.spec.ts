import { TestBed } from '@angular/core/testing';

import { ToastMessageCollectionServiceService } from './toast-message-collection-service.service';

describe('ToastMessageCollectionServiceService', () => {
  let service: ToastMessageCollectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastMessageCollectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
