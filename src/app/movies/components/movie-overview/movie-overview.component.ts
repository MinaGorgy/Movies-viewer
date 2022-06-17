import { MovieDetails } from './../../../shared/models/movie-details.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.css']
})
export class MovieOverviewComponent implements OnInit {

  @Input() currentMovie: MovieDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
