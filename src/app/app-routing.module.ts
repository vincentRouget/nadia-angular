import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { EpilationComponent } from './component/epilation/epilation.component';
import { MainsComponent } from './component/mains/mains.component';
import { VisageComponent } from './component/visage/visage.component';
import { CorpsComponent } from './component/corps/corps.component';
import { MassageComponent } from './component/massage/massage.component';
import { MaquillageComponent } from './component/maquillage/maquillage.component';
import { CommentaryComponent } from './component/commentary/commentary.component';
import { NavbarAccueilComponent } from './component/navbar-accueil/navbar-accueil.component';
import { SendCommentaryComponent } from './component/send-commentary/send-commentary.component';
import { MentionsComponent } from './component/mentions/mentions.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'commentaires',
    component: NavbarAccueilComponent,
    children: [
      {
        path: '',
        component: CommentaryComponent
      }
    ]
  },
  {
    path: 'epilation',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: EpilationComponent
      }
    ]
  },
  {
    path: 'soins_des_mains',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: MainsComponent
      },
    ]
  },
  {
    path: 'visage',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: VisageComponent
      }
    ]
  },
  {
    path: 'corps',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: CorpsComponent
      }
    ]
  },
  {
    path: 'massage',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: MassageComponent
      }
    ]
  },
  {
    path: 'maquillage',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: MaquillageComponent
      }
    ]
  },
  {
    path: 'avis',
    component: NavbarAccueilComponent,
    children: [
      {
        path: '',
        component: SendCommentaryComponent
      }
    ]
  },
  {
    path: 'privacy',
    component: NavbarAccueilComponent,
    children: [
      {
        path: '',
        component: MentionsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
