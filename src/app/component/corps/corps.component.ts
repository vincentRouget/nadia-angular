import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Corps } from '../../features/models/corps.model';

@Component({
  selector: 'app-corps',
  templateUrl: './corps.component.html',
  styleUrls: ['./corps.component.css']
})

export class CorpsComponent implements OnInit {

  public dot: string = '.'.repeat(500);

  public pureté: Corps;
  public cou: Corps;
  public corps20: Corps;
  public corps40: Corps;

  public corpsArray: Corps[] = [];

  constructor(private meta: Meta, private title: Title) {
    this.pureté = new Corps("Soins pureté, 30 min", "Nettoyage, gommage, vapeur, comédons, masque", 40);
    this.cou = new Corps("Modelage cou et dos, 30 min", "", 30);
    this.corps20 = new Corps("Modelage corps, 20 min", "", 20);
    this.corps40 = new Corps("Modelage du corps, 40 min", "", 40);

    this.corpsArray = [
      this.pureté,
      this.cou,
      this.corps20,
      this.corps40
    ];
  }

  ngOnInit(): void {
    // Définir les métadonnées
    this.title.setTitle('Soins du Corps - Relaxation et Bien-être');
    this.meta.addTags([
      { name: 'description', content: 'Découvrez nos soins du corps pour une relaxation complète : soins pureté, modelage du cou et dos, et modelage du corps.' },
      { name: 'keywords', content: 'Nadia, soins de beauté naturels, esthéticienne, soins du visage et du corps, bien-être, épilation, massage relaxant, maquillage, santé peau, relaxation, Vienne, 86, Mirebeau, Poitiers, modelage, pureté' }
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
