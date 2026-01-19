import { TestBed } from '@angular/core/testing';

import { FipeBackendService } from './fipe-backend.service';

describe('FipeBackendService', () => {
  let service: FipeBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FipeBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
