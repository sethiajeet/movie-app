import { MovieCardModel } from './MovieCard';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesListService {
  public movieList? : MovieCardModel[];
  constructor() { }
}
