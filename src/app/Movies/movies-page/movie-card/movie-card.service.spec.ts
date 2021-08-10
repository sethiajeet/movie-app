import { TestBed } from '@angular/core/testing';

import { MovieCardService } from './movie-card.service';

describe('MovieCardService', () => {
  let service: MovieCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
