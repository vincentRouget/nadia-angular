import { Component, OnInit, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-laius',
  templateUrl: './laius.component.html',
  styleUrls: ['./laius.component.css'],
})
export class LaiusComponent implements OnInit, AfterViewInit {
  pitch: string = "Soins de beauté";

  laiusComeIn = false;
  laiusComeOut = false;

  private scrollHeightBegin = 0;
  private scrollHeightFinish = 0;

  @ViewChild('laiusContainer') laiusContainer!: ElementRef;

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    // Set SEO title and meta tags
    this.titleService.setTitle('Notre philosophie du visage et du corps');
    this.metaService.addTags([
      { name: 'description', content: 'Découvrez notre philosophie des soins de beauté, avec des soins du visage et du corps personnalisés, utilisant des produits innovants pour une beauté naturelle.' },
      { name: 'keywords', content: 'Nadia, soins de beauté naturels, esthéticienne, soins du visage et du corps, bien-être, épilation, massage relaxant, maquillage, santé peau, relaxation, Vienne, 86, Mirebeau, Poitiers' }
    ]);
  }

  ngAfterViewInit(): void {
    // Calcul des hauteurs en pourcentage
    const componentHeight = this.laiusContainer.nativeElement.offsetHeight;
    this.scrollHeightBegin = componentHeight * 0;
    this.scrollHeightFinish = componentHeight * 0.5;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const componentTop = this.laiusContainer.nativeElement.getBoundingClientRect().top + scrollY;

    this.laiusComeIn = scrollY >= componentTop + this.scrollHeightBegin && scrollY <= componentTop + this.scrollHeightFinish;
    this.laiusComeOut = scrollY < componentTop + this.scrollHeightBegin || scrollY > componentTop + this.scrollHeightFinish;
  }
}
