import { Country } from './country.model';
import { Movie } from './movie.model';
import { ProductionCompany } from './production-company.model';


export interface MovieDetails extends Movie {
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: Country[];
  revenue: number;
  runtime: number;
  spoken_languages: Country[];
  status: string;
  tagline: string;
  budget: number;
  belongs_to_collection?: any;
}
