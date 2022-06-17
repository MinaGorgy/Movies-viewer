import { Movie } from './movie.model';

export interface PopularMoviesResponse {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}
