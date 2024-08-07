import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Mains } from '../../features/models/mains.model';

@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.css'],
})

export class MainsComponent implements OnInit {

  public dot: string = '.'.repeat(500);

  //BEAUTE DES MAINS ET DES PIEDS
  public manucure: Mains;
  public masque: Mains;
  public massage: Mains;
  public pose: Mains;

  public mainsBeaute: Mains[] = [];

  //SEMI PERMANENT
  public preparation: Mains;
  public semi: Mains;
  public depose: Mains;

  public mainsSemiPermanent: Mains[] = [];

  constructor() {
    //BEAUTE DES MAINS ET DES PIEDS
    this.manucure = new Mains("BEAUTE", "Manucure ou pédicure", "", 25);
    this.masque = new Mains("BEAUTE", "Masque mains ou pieds", "Réparateur et hydratant", 10);
    this.massage = new Mains("BEAUTE", "Massage mains / pieds", "", 10);
    this.pose = new Mains("BEAUTE", "Pose de vernis", "", 8);

    this.mainsBeaute = [
      this.manucure,
      this.masque,
      this.massage,
      this.pose];

    //SEMI PERMANENT
    this.preparation = new Mains("SEMIPERMANENT", "Préparation de l'ongle", "", 10);
    this.semi = new Mains("SEMIPERMANENT", "Pose du vernis semi permanent", "", 23);
    this.depose = new Mains("SEMIPERMANENT", "Dépose", "", 10);

    this.mainsSemiPermanent = [
      this.preparation,
      this.semi,
      this.depose,
    ];
  };

  ngOnInit(): void {
    setTimeout(() => {
      try {
        window.scroll(0, 0);
        console.log("scroll");
      } catch (e) {
        console.error('window.scroll failed, falling back to window.scrollTo', e);

      }
    }, 100);
    setTimeout(() => {
      try {
        window.scrollTo(0, 0);
        console.log("scrollTo");
      } catch (e2) {
        console.error('window.scrollTo failed', e2);
      }
    }, 100);
  }
}
