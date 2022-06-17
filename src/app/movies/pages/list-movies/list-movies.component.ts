import { environment } from './../../../../environments/environment';
import { PopularMoviesResponse } from './../../../shared/models/popular-movies-response.model';
import { GenericHttpService } from './../../../core/services/generic-http/generic-http.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit, OnDestroy {

  popularMoviesResponse!: PopularMoviesResponse;
  getPopularMoviesSubscription!: Subscription;
  currentPage = 1;
  isLoading: boolean;
  searchQuery: string;

  isErrorModalShown: boolean;
  errorMessage: string;

  constructor(
    private moviesService: GenericHttpService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams.searchKeyword) {
        this.currentPage = 1;
        this.searchQuery = queryParams.searchKeyword;
        this.getMoviesFromServer(true, this.searchQuery);
      } else {
        this.searchQuery = '';
        this.getMoviesFromServer(false);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.getPopularMoviesSubscription) {
      this.getPopularMoviesSubscription.unsubscribe();
    }
  }

  movieSelected(movieId: string | number): void {
    this.router.navigate(['./', movieId], {
      relativeTo: this.route
    });
  }

  pageChanged(event): void {
    this.currentPage = event.page;
    this.getMoviesFromServer(this.searchQuery !== '', this.searchQuery);

  }

  private getMoviesFromServer(hasSearchQuery: boolean, searchQuery: string = ''): void {
    this.isLoading = true;

    let requestUrl = environment.baseUrl;
    requestUrl += hasSearchQuery ? environment.searchMovies : environment.getPopularMovies;

    const httpParams = !hasSearchQuery
    ? new HttpParams()
    .set('page', this.currentPage.toString())
    : new HttpParams()
    .set('page', this.currentPage.toString())
    .set('query', this.searchQuery);

    this.getPopularMoviesSubscription = this.moviesService
      .getAll(requestUrl, httpParams)
      .pipe(
        take(1),
        map((response: PopularMoviesResponse) => {
          response.results = response.results.map(m => {
            m.poster_path = environment.imagesConfigUrl + m.poster_path;
            return m;
          });
          return response;
        }))
      .subscribe((mappedResponse: any) => {
        this.popularMoviesResponse = mappedResponse;
      }, error => {
        this.errorMessage = error.message;
        this.isErrorModalShown = true;
      });
    this.isLoading = false;
  }

}
