import { Component, OnInit } from '@angular/core';
import { Corps } from '../../features/models/corps.model';

@Component({
  selector: 'app-corps',
  templateUrl: './corps.component.html',
  styleUrl: './corps.component.css'
})
  
export class CorpsComponent implements OnInit {

  public dot: string = '.'.repeat(500);

  public pureté: Corps;
  public cou: Corps;
  public corps20: Corps;
  public corps40: Corps;

  public corpsArray: Corps[] = [];

  constructor() {
    this.pureté = new Corps("Soins pureté, 30 min", "Nettoyage, gommage, vapeur, comédons, masque", 40);
    this.cou = new Corps("Modelage cou et dos, 30 min", "", 30);
    this.corps20 = new Corps("Modelage corps, 20 min", "", 20);
    this.corps40 = new Corps("Modelage du corps, 40 min", "", 40);

    this.corpsArray = [
      this.pureté,
      this.cou,
      this.corps20,
      this.corps40
    ]
  };

  ngOnInit(): void {
    window.scrollTo(0, 0);
  };
}
