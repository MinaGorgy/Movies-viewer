import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  notFoundImgSrc = './../../../assets/error-6482984.svg';
  notFoundImgAlt = 'Not Found Error Image';
  notFoundRouteText = 'Oops !!! the page you requested could not be found';

  constructor() { }

  ngOnInit(): void {
  }

}
