import { Component, OnInit, HostListener } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-laius',
  templateUrl: './laius.component.html',
  styleUrls: ['./laius.component.css'],
})
export class LaiusComponent implements OnInit {
  pitch: string = "Soins de beauté";
  laiusComeIn = false;
  laiusComeOut = false;
  private scrollHeightBegin = 1100;
  private scrollHeightFinish = 1800;

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    // Set SEO title and meta tags
    this.titleService.setTitle('Soins de Beauté - Notre Philosophie du Visage et du Corps');
    this.metaService.addTags([
      { name: 'description', content: 'Découvrez notre philosophie des soins de beauté, avec des soins du visage et du corps personnalisés, utilisant des produits innovants pour une beauté naturelle.' },
      { name: 'keywords', content: 'soins de beauté, soins personnalisés, produits naturels, massages relaxants, Nadia, esthéticienne, soins, beauté, corps, nature, naturelle, visage, peau, relaxation, santé, épilation, massage, maquillage, mains, pieds' }
    ]);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.laiusComeIn = scrollY >= this.scrollHeightBegin && scrollY <= this.scrollHeightFinish;
    this.laiusComeOut = scrollY < this.scrollHeightBegin || scrollY > this.scrollHeightFinish;
  }
}
