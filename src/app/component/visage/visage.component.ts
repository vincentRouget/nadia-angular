import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Visage } from '../../features/models/visage.model';

@Component({
  selector: 'app-visage',
  templateUrl: './visage.component.html',
  styleUrls: ['./visage.component.css']
})

export class VisageComponent implements OnInit {

  plus: string = '../../../assets/icons8-plus-100.png';
  moins: string = '../../../assets/icons8-minus-100.png';

  public dot: string = '.'.repeat(500);

  isDetailsOpen: boolean = false;

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

  constructor(private meta: Meta, private title: Title) {
    //SOINS DU VISAGE
    this.purifiant = new Visage("SOINS", "Soin purifiant Ado, 45 min", "de 12à 17ans", 25);
    this.coup = new Visage("SOINS", "Soin coup d'éclat, 30 min", "", 30);
    this.regenerant = new Visage("SOINS", "Soin régénérant, 1h15", "Anti-âge, fermeté, éclat, contour des yeux", 50);
    this.specifique = new Visage("SOINS", "Soin spécifique, 1h15", "Hydratant, apaisant, purifiant", 50);

    this.visageSoins = [
      this.purifiant,
      this.coup,
      this.regenerant,
      this.specifique
    ];

    //MODELAGE FACIAL JAPONAIS
    this.lifting = new Visage("JAPONAIS", "Lifting manuel du visage, 1H", "Huile adaptée. Stimule le teint, améliore la circulation, relaxant, réduit le vieillissement de la peau, lissant, repulpant", 50);
    this.cure = new Visage("JAPONAIS", "Cure de 10 semaines du lifting", "6 séances de 1H, réparties sur la durée de la cure, pour une plus grande efficacité", 465);

    this.visageJaponais = [
      this.lifting,
      this.cure
    ];
  };

  public handleDetails() {
    this.isDetailsOpen = !this.isDetailsOpen;
    console.log("details");
  };

  ngOnInit(): void {
    // Définir les métadonnées
    this.title.setTitle('Soins et modelage facial');
    this.meta.addTags([
      { name: 'description', content: 'Découvrez nos soins du visage et modelage facial japonais pour une peau revitalisée et éclatante.' },
      { name: 'keywords', content: 'modelage facial japonais, lifting manuel, soins purifiant, hydratant, anti-âge, Nadia, soins de beauté naturels, esthéticienne, soins du visage et du corps, bien-être, épilation, massage relaxant, maquillage, santé peau, relaxation, Vienne, 86, Mirebeau, Poitiers' }
    ]);

    // Faire défiler vers le haut de la page
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
  }
}
