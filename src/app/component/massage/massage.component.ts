import { Component, OnInit } from '@angular/core';
import { Massage } from '../../features/models/massage.model';

@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrl: './massage.component.css'
})

export class MassageComponent implements OnInit {

  public dot: string = '.'.repeat(500);

  // INDIEN
  public tete: Massage;
  public corps: Massage;

  public massageArray: Massage[] = [];

  // SUEDOIS
  public suedois1: Massage;
  public suedois15: Massage;

  public massageSuedoisArray: Massage[] = [];

  constructor() {
    // INDIEN
    this.tete = new Massage(
      "Massage Abyanga tête et haut de corps aux huiles chaudes",
      "Réduit les insomnies, stress, anxiété, épuisements",
      45);
    this.corps = new Massage(
      "Massage Abhyanga corps entier aux huiles chaudes",
      "Relaxant, réduit les insomnies, stress, anxiété, tension, détoxifiant, irrigation des tissus, meilleur retour veineux, énergie. Réduit la prise de poids, mauvaise estime de soi et/ou dépression",
      70);


    this.massageArray = [
      this.tete,
      this.corps
    ]

    // SUEDOIS
    this.suedois1 = new Massage(
      "Massage suédois, 1h",
      "",
      45);
    this.suedois15 = new Massage(
      "Massage suédois, 1h30",
      "",
      70);

    this.massageSuedoisArray = [
      this.suedois1,
      this.suedois15
    ]

  };

  ngOnInit(): void {
    window.scrollTo(0, 0);
  };
}
