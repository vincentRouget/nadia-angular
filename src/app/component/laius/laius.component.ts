import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-laius',
  templateUrl: './laius.component.html',
  styleUrl: './laius.component.css',
})

export class LaiusComponent {

  pitch: string = "Soins de beauté";

  laiusComeIn = false;
  laiusComeOut = false;

  private scrollHeightBegin = 1100;
  private scrollHeightFinish = 1800;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.laiusComeIn = scrollY >= this.scrollHeightBegin && scrollY <= this.scrollHeightFinish;
    this.laiusComeOut = scrollY < this.scrollHeightBegin && scrollY > this.scrollHeightFinish;
  };
}
