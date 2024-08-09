import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  scrollYPosition: number = 0;

  constructor(private titleService: Title, private metaService: Meta) { }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrollYPosition = window.scrollY;
    console.log(this.scrollYPosition);
    localStorage.setItem('scrollPosition', this.scrollYPosition.toString());
  };

  ngOnInit(): void {

    // Sauvegarder position scroll Y lors du changement URL :
    // const storedPosition = localStorage.getItem('scrollPosition');
    // let localPosition = storedPosition ? +storedPosition : 0;
    // window.scrollTo(0, localPosition);

    // Haut de page automatique lors du changement URL :
    setTimeout(() => {
      try {
        window.scroll(0, 0);
      } catch (e) {
        console.error('window.scroll failed, falling back to window.scrollTo', e);
        try {
          window.scrollTo(0, 0);
        } catch (e2) {
          console.error('window.scrollTo failed', e2);
        }
      }
    }, 0);

    // Set SEO title and meta tags
    this.titleService.setTitle('Page d\'Accueil - Nadia');
    this.metaService.addTags([
      { name: 'description', content: 'Bienvenue sur la page d\'accueil de notre site. Découvrez nos services, notre expertise et comment nous pouvons vous aider à atteindre vos objectifs.' },
      { name: 'keywords', content: 'Nadia, soins de beauté naturels, esthéticienne, soins du visage et du corps, bien-être, épilation, massage relaxant, maquillage, santé peau, relaxation, Vienne, 86, Mirebeau, Poitiers' }
    ]);
  };

  ngAfterViewInit(): void {
    // ngAfterViewInit ensures that the view is fully rendered before setting the scroll position
    const storedPosition = localStorage.getItem('scrollPosition');
    let localPosition = storedPosition ? +storedPosition : 0;
    window.scrollTo(0, localPosition);
  };
}
