import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUrl: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe(() => {
    //   const currentUrl = this.router.url;
    // });
  }

  public hideEpilation(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== '/epilation';
  };

  public hideMains(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== '/soins_des_mains';
  };

  public hideVisage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== '/visage';
  };

  public hideCorps(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== '/corps';
  };

  public hideMassage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== '/massage';
  };

  public hideMaquillage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== '/maquillage';
  };
}
