import { Component, OnInit } from '@angular/core';
import { NavBarItem } from 'src/app/shared/models/nav-bar-item.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  navBarItems: NavBarItem[];

  constructor() {}

  ngOnInit(): void {
    this.navBarItems = [
      {label: 'Movies', route: './movies'}
    ];
  }

}
