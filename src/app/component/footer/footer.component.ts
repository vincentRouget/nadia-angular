import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  map: string = '../../../assets/map2.png';
  facebook: string = '../../../assets/facebook.png';
  charlotte: string = '../../../assets/charlotte.png';
  acorelle: string = '../../../assets/acorelle.jpg';
  hair: string = '../../../assets/hair.png';

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    // Définir les métadonnées de la page
    this.title.setTitle('Footer');
    this.meta.addTags([
      { name: 'description', content: 'Description de la page pour le pied de page et autres informations pertinentes.' },
      { name: 'keywords', content: 'pied de page, informations de contact, horaires, mentions légales, Nadia, esthéticienne, soins, visage, beauté, corps, nature, naturelle, peau, relaxation, santé, épilation, massage, maquillage, mains, pieds ' }
    ]);
  }
}