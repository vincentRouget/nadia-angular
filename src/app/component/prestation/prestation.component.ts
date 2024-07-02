import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrl: './prestation.component.css',
})

export class PrestationComponent {

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

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.prestatationFirstLineComeIn = scrollY >= this.scrollHeightFirstlinetBegin && scrollY <= this.scrollHeightFirstLineFinish;
    this.prestationSecondLineComeOut = scrollY < this.scrollHeightFirstlinetBegin && scrollY > this.scrollHeightFirstLineFinish;
    this.prestatationSecondLineComeIn = scrollY >= this.scrollHeightSecondlinetBegin && scrollY <= this.scrollHeightSecondLineFinish;
    this.prestationSecondLineComeOut = scrollY < this.scrollHeightSecondlinetBegin && scrollY > this.scrollHeightSecondLineFinish;
  };
}
