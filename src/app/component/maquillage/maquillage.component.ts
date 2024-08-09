import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Maquillage } from '../../features/models/maquillage.model';

@Component({
  selector: 'app-maquillage',
  templateUrl: './maquillage.component.html',
  styleUrls: ['./maquillage.component.css']
})

export class MaquillageComponent implements OnInit {

  public dot: string = '.'.repeat(500);

  // MAQUILLAGE
  public jour: Maquillage;
  public occasion: Maquillage;
  public mariee: Maquillage;

  public maquillageArray: Maquillage[] = [];

  // COLORATIONS
  public sourcils: Maquillage;
  public cils: Maquillage;

  public colorationArray: Maquillage[] = [];

  constructor(private meta: Meta, private title: Title) {
    // MAQUILLAGE
    this.jour = new Maquillage("MAQUILLAGE", "Maquillage de jour", 15);
    this.occasion = new Maquillage("MAQUILLAGE", "Maquillage occasion particulière", 25);
    this.mariee = new Maquillage("MAQUILLAGE", "Maquillage mariée", 30);

    this.maquillageArray = [
      this.jour,
      this.occasion,
      this.mariee
    ];

    // COLORATIONS
    this.sourcils = new Maquillage("COLORATION", "Sourcils", 10);
    this.cils = new Maquillage("COLORATION", "Cils", 10);

    this.colorationArray = [
      this.sourcils,
      this.cils
    ];
  }

  ngOnInit(): void {
    // Définir les métadonnées
    this.title.setTitle('Maquillage et coloration');
    this.meta.addTags([
      { name: 'description', content: 'Découvrez nos services de maquillage pour toutes les occasions : jour, mariée, et événements spéciaux.' },
      { name: 'keywords', content: 'Nadia, soins de beauté naturels, esthéticienne, soins du visage et du corps, bien-être, épilation, massage relaxant, maquillage, santé peau, relaxation, Vienne, 86, Mirebeau, Poitiers, jour, mariée, événements spéciaux' }
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
