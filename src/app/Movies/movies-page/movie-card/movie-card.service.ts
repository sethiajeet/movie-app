import { MovieCardModel } from '../MovieCard';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class MovieCardService {
  
  public movieCard: MovieCardModel = {
    'title': 'sample title',
    'description': 'sampledescription',
    'genres': 'sam , sam , sam',
    'uuid': '028y21e'
  };

  constructor() { }
}
