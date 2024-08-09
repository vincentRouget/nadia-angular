import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Epilation } from '../../features/models/epilation.model';

@Component({
  selector: 'app-epilation',
  templateUrl: './epilation.component.html',
  styleUrls: ['./epilation.component.css'],
})

export class EpilationComponent implements OnInit {

  public dot: string = '.'.repeat(500);

  //VISAGE
  public dessinDesSourcils: Epilation;
  public sourcils: Epilation;
  public levres: Epilation;
  public menton: Epilation;
  public visage: Epilation;

  public epilationVisage: Epilation[] = [];

  //MAILLOT
  public simple: Epilation;
  public bresilien: Epilation;
  public integral: Epilation;
  public fessier: Epilation;
  public ventre: Epilation;

  public epilationMaillot: Epilation[] = [];

  //CORPS
  public aisselles: Epilation;
  public demiJambes: Epilation;
  public jambes: Epilation;
  public bras: Epilation;
  public torse: Epilation;

  public epilationCorps: Epilation[] = [];

  constructor(private meta: Meta, private title: Title) {
    //VISAGE
    this.dessinDesSourcils = new Epilation("VISAGE", "Dessin des sourcils", 15);
    this.sourcils = new Epilation("VISAGE", "Sourcils", 8);
    this.levres = new Epilation("VISAGE", "Lèvres", 8);
    this.menton = new Epilation("VISAGE", "Menton", 8);
    this.visage = new Epilation("VISAGE", "Visage", 15);

    this.epilationVisage = [
      this.dessinDesSourcils,
      this.sourcils,
      this.levres,
      this.menton,
      this.visage];

    //MAILLOT
    this.simple = new Epilation("MAILLOT", "Simple", 10);
    this.bresilien = new Epilation("MAILLOT", "Brésilien", 12);
    this.integral = new Epilation("MAILLOT", "Intégral", 28);
    this.fessier = new Epilation("MAILLOT", "Fessier", 10);
    this.ventre = new Epilation("MAILLOT", "Ventre", 8);

    this.epilationMaillot = [
      this.simple,
      this.bresilien,
      this.integral,
      this.fessier,
      this.ventre,
    ];

    //CORPS
    this.aisselles = new Epilation("CORPS", "Aisselles", 10);
    this.demiJambes = new Epilation("CORPS", "1/2 jambes", 15);
    this.jambes = new Epilation("CORPS", "Jambes entières", 25);
    this.bras = new Epilation("CORPS", "Bras", 10);
    this.torse = new Epilation("CORPS", "Torse / Dos", 15);

    this.epilationCorps = [
      this.aisselles,
      this.demiJambes,
      this.jambes,
      this.bras,
      this.torse
    ];
  };

  ngOnInit(): void {
    // Définir les métadonnées
    this.title.setTitle('Epilation - Services de qualité');
    this.meta.addTags([
      { name: 'description', content: 'Découvrez nos services d\'épilation pour le visage, le maillot et le corps. Des soins de qualité adaptés à vos besoins.' },
      { name: 'keywords', content: 'épilation maillot, Nadia, soins de beauté naturels, esthéticienne, soins du visage et du corps, bien-être, épilation, massage relaxant, maquillage, santé peau, relaxation, Vienne, 86, Mirebeau, Poitiers' }
    ]);

    // Faire défiler vers le haut de la page
    setTimeout(() => {
      try {
        window.scroll(0, 0);
        console.log("scroll");
      } catch (e) {
        console.error('window.scroll failed, falling back to window.scrollTo', e);
        try {
          window.scrollTo(0, 0);
          console.log("scrollTo");
        } catch (e2) {
          console.error('window.scrollTo failed', e2);
        }
      }
    }, 0);
  }
}
