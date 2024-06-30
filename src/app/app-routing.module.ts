import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScrollToTopDirective } from './core/services/ScrollService';

import { HeaderComponent } from './component/header/header.component';
import { LaiusComponent } from './component/laius/laius.component';
import { PrestationComponent } from './component/prestation/prestation.component';
import { EpilationComponent } from './component/epilation/epilation.component';
import { VisageComponent } from './component/visage/visage.component';
import { MainsComponent } from './component/mains/mains.component';
import { MomentComponent } from './component/moment/moment.component';
import { CommentaryComponent } from './component/commentary/commentary.component';
import { SendCommentaryComponent } from './component/send-commentary/send-commentary.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: LaiusComponent,
        outlet: 'main'
      },
      {
        path: 'prestations',
        component: PrestationComponent,
        outlet: 'main'
      },
      {
        path: 'moments',
        component: MomentComponent,
        outlet: 'main'
      },
      {
        path: 'commentaires',
        component: CommentaryComponent,
        outlet: 'main'
      },
    ]
  },
  {
    path: 'epilation',
    component: EpilationComponent
  },
  {
    path: 'soins_des_mains',
    component: MainsComponent
  },
  {
    path: 'visage',
    component: VisageComponent
  },
  {
    path: 'commentaires',
    component: CommentaryComponent,
  },
  {
    path: 'avis',
    component: SendCommentaryComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [ScrollToTopDirective],
  exports: [RouterModule]
})
export class AppRoutingModule { }
