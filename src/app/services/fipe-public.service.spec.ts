import { TestBed } from '@angular/core/testing';

import { FipePublicService } from './fipe-public.service';

describe('FipePublicService', () => {
  let service: FipePublicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FipePublicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
