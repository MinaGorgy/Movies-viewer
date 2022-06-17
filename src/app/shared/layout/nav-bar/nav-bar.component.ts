import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { NavBarItem } from '../../models/nav-bar-item.model';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() navBarItems: NavBarItem[];
  searchWords: string;
  nabBarBrand = 'Movie Viewer';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(): void {
    this.router.navigate(['home', 'movies'], {
      queryParams: {
        searchKeyword: this.searchWords
      }
    });
  }

}
