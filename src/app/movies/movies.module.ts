import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { MovieOverviewComponent } from './components/movie-overview/movie-overview.component';
import { MovieBriefComponent } from './components/movie-brief/movie-brief.component';
import { RatingModule } from 'ngx-bootstrap/rating';
@NgModule({
  declarations: [
    ListMoviesComponent,
    MovieDetailsComponent,
    MovieOverviewComponent,
    MovieBriefComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    PaginationModule.forRoot(),
    RatingModule.forRoot(),
    FormsModule
  ]
})
export class MoviesModule { }
