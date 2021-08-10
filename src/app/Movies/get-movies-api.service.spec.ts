import { TestBed } from '@angular/core/testing';

import { GetMoviesApiService } from './get-movies-api.service';

describe('GetMoviesApiService', () => {
  let service: GetMoviesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMoviesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
