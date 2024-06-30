import { Component } from '@angular/core';
import { LaiusComponent } from '../laius/laius.component';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrl: './prestation.component.css',
})
export class PrestationComponent {
  epilation: string = '../../../assets/epilation.jpg';
  mains: string = '../../../assets/mains.jpg';
  visage: string = '../../../assets/visage.jpg';
  corps: string = '../../../assets/corps.jpg';
  massage: string = '../../../assets/massage.jpg';
  maquillage: string = '../../../assets/maquillage.jpg';
}
