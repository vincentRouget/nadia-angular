import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Massage } from '../../features/models/massage.model';

@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.css']
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

  constructor(private meta: Meta, private title: Title) {
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
  }

  ngOnInit(): void {
    // Définir les métadonnées
    this.title.setTitle('Services de Massage Ayurvédique et Suédois');
    this.meta.addTags([
      { name: 'description', content: 'Découvrez nos massages ayurvédiques et suédois pour une relaxation complète et un bien-être optimal.' },
      { name: 'keywords', content: 'massage ayurvédique, massage suédois, Nadia, soins de beauté naturels, esthéticienne, soins du visage et du corps, bien-être, épilation, massage relaxant, maquillage, santé peau, relaxation, Vienne, 86, Mirebeau, Poitiers, réduction du stress, santé' }
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
