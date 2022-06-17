import { LandingComponent } from './pages/landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home/movies', pathMatch: 'full' },
  {path: 'index', redirectTo: 'home/movies', pathMatch: 'full' },
  {path: 'home', component: LandingComponent, children: [
    {path: 'movies', loadChildren: () => import('./movies/movies-routing.module').then(m => m.MoviesRoutingModule)},
  ]},
  {path: '**' , component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
