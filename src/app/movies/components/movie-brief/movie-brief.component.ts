import { Component, Input, OnInit } from '@angular/core';
import { MovieDetails } from 'src/app/shared/models/movie-details.model';

@Component({
  selector: 'app-movie-brief',
  templateUrl: './movie-brief.component.html',
  styleUrls: ['./movie-brief.component.css']
})
export class MovieBriefComponent implements OnInit {

  @Input() currentMovie: MovieDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
