import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const moviesModuleRoutes: Routes = [
  {path: '', component: ListMoviesComponent},
  {path: ':id', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(moviesModuleRoutes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
