import { TestBed } from '@angular/core/testing';

import { GetLoginAPIService } from './get-login-api.service';

describe('GetLoginAPIService', () => {
  let service: GetLoginAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLoginAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
