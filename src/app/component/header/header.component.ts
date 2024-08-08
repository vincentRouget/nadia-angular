import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    // Définir des métadonnées spécifiques si nécessaire
    this.title.setTitle('Header');
    this.meta.addTags([
      { name: 'description', content: 'Description spécifique pour le header.' },
      { name: 'keywords', content: 'Nadia, soins de beauté naturels, esthéticienne, soins du visage et du corps, bien-être, épilation, massage relaxant, maquillage, santé peau, relaxation, Vienne, 86, Mirebeau, Poitiers' }
    ]);
  }
}
