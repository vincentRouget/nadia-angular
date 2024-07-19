import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Visage } from '../../features/models/visage.model';


@Component({
  selector: 'app-visage',
  templateUrl: './visage.component.html',
  styleUrl: './visage.component.css'
})

export class VisageComponent implements OnInit {
  public dot: string = '.'.repeat(500);

  //SOINS DU VISAGE
  public purifiant: Visage;
  public coup: Visage;
  public regenerant: Visage;
  public specifique: Visage;

  public visageSoins: Visage[];

  //MODELAGE FACIAL JAPONAIS
  public lifting: Visage;
  public cure: Visage;

  public visageJaponais: Visage[];

  constructor() {
    //SOINS DU VISAGE
    this.purifiant = new Visage("SOINS", "Soin purifiant Ado, 45 min", "de 12à 17ans", 25);
    this.coup = new Visage("SOINS", "Soin coup d'éclat, 30 min", "", 30);
    this.regenerant = new Visage("SOINS", "Soin régénérant, 1h15", "Anti-âge, fermeté, éclat, contour des yeux", 50);
    this.specifique = new Visage("SOINS", "Soin spécifique, 1h15", "Hydratant, apaisant, purifiant", 50);

    this.visageSoins = [
      this.purifiant,
      this.coup,
      this.regenerant,
      this.specifique];

    //MODELAGE FACIAL JAPONAIS
    this.lifting = new Visage("JAPONAIS", "Lifting manuel du visage, 1H", "Huile adaptée. Stimule le teint, améliore la circulation, relaxant, réduit le vieillissement de la peau, lissant, repulpant", 50);
    this.cure = new Visage("JAPONAIS", "Cure de 10 semaines du lifting", "6 séances de 1H, réparties sur la durée de la cure, pour une plus grande efficacité", 465);

    this.visageJaponais = [
      this.lifting,
      this.cure]
  };

  ngOnInit(): void {
    window.scrollTo(0, 0);
  };
}
