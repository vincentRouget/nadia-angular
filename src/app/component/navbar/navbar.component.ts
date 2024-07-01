import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  currentUrl: string = '';

  constructor(
    private router: Router,
  ) { };

  ngOnInit(): void {
    window.scrollTo(0, 0);
  };

  public focusEpilation(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== '/epilation';
  };

  public focusMains(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== '/soins_des_mains';
  };

  public focusVisage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== '/visage';
  };

  public focusCorps(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== '/corps';
  };

  public focusMassage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== '/massage';
  };

  public focusMaquillage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== '/maquillage';
  };
}
