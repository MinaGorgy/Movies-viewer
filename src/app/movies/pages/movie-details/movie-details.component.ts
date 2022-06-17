import { environment } from './../../../../environments/environment';
import { Subscription } from 'rxjs';
import { GenericHttpService } from './../../../core/services/generic-http/generic-http.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/shared/models/movie-details.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  currentMovie: MovieDetails;
  movieDetailsSubscription: Subscription;

  isErrorModalShown: boolean;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private moviesDetailsService: GenericHttpService) { }

  ngOnDestroy(): void {
    if (this.movieDetailsSubscription) {
      this.movieDetailsSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieDetailsSubscription = this.moviesDetailsService
        .getItem<MovieDetails>(`${environment.baseUrl}${environment.getMovieDetails}`, params.id).pipe(
          map((response: MovieDetails) => {
            response.poster_path = environment.imagesConfigUrl + response.poster_path;
            response.backdrop_path = environment.imagesConfigUrl + response.backdrop_path;
            return response;
          })).subscribe((response: MovieDetails) => {
            this.currentMovie = response;
          }, error => {
            this.errorMessage = error.message;
            this.isErrorModalShown = true;
          });
    });
  }

}
