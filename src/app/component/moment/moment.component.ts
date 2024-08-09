import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  moment: string = '../../../assets/moment.jpg';

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    // Set SEO title and meta tags
    this.titleService.setTitle('Nadia, votre esthéticienne');
    this.metaService.addTags([
      { name: 'description', content: 'Découvrez nos moments spécifiques, avec des images évocatrices qui capturent l’essence de votre expérience unique.' },
      { name: 'keywords', content: 'moments spécifiques, expérience, image, moment parfait, Nadia, soins de beauté naturels, esthéticienne, soins du visage et du corps, bien-être, épilation, massage relaxant, maquillage, santé peau, relaxation, Vienne, 86, Mirebeau, Poitiers' }
    ]);
  }
}
