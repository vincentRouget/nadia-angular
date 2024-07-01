import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-accueil',
  templateUrl: './navbar-accueil.component.html',
  styleUrls: ['./navbar-accueil.component.css']
})

export class NavbarAccueilComponent implements OnInit {

  currentUrl: string = '';

  constructor(
    private router: Router,
  ) { };

  ngOnInit(): void {
    window.scrollTo(0, 0);
  };
}
