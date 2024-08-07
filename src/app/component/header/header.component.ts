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
      { name: 'keywords', content: 'Nadia, esthéticienne, soins, beauté, corps, nature, naturelle, peau, relaxation, santé, épilation, massage, maquillage, mains, pieds, header' }
    ]);
  }
}
