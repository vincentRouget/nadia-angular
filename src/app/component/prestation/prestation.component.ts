import { Component, HostListener, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.css']
})
export class PrestationComponent implements OnInit {

  epilation: string = '../../../assets/epilation.jpg';
  mains: string = '../../../assets/mains.jpg';
  visage: string = '../../../assets/visage.jpg';
  corps: string = '../../../assets/corps.jpg';
  massage: string = '../../../assets/massage.jpg';
  maquillage: string = '../../../assets/maquillage.jpg';

  prestatationFirstLineComeIn = false;
  prestationFirstLineComeOut = false;

  prestatationSecondLineComeIn = false;
  prestationSecondLineComeOut = false;

  private scrollHeightFirstlinetBegin = 2400;
  private scrollHeightFirstLineFinish = 3800;

  private scrollHeightSecondlinetBegin = 3600;
  private scrollHeightSecondLineFinish = 5000;

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    // Set SEO title and meta tags
    this.titleService.setTitle('Prestations de Beauté - Épilation, Soins des Mains, Visage, Corps, Massage, Maquillage');
    this.metaService.addTags([
      { name: 'description', content: 'Découvrez nos prestations de beauté incluant l’épilation, les soins des mains, du visage, du corps, les massages et le maquillage. Profitez d’une expérience personnalisée pour révéler votre beauté naturelle.' },
      { name: 'keywords', content: 'Nadia, soins de beauté naturels, esthéticienne, soins du visage et du corps, bien-être, épilation, massage relaxant, maquillage, santé peau, relaxation, Vienne, 86, Mirebeau, Poitiers' }
    ]);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.prestatationFirstLineComeIn = scrollY >= this.scrollHeightFirstlinetBegin && scrollY <= this.scrollHeightFirstLineFinish;
    this.prestationFirstLineComeOut = scrollY < this.scrollHeightFirstlinetBegin && scrollY > this.scrollHeightFirstLineFinish;
    this.prestatationSecondLineComeIn = scrollY >= this.scrollHeightSecondlinetBegin && scrollY <= this.scrollHeightSecondLineFinish;
    this.prestationSecondLineComeOut = scrollY < this.scrollHeightSecondlinetBegin && scrollY > this.scrollHeightSecondLineFinish;
  }
}
