import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NavbarAccueilComponent } from './component/navbar-accueil/navbar-accueil.component';
import { SendCommentaryComponent } from './component/send-commentary/send-commentary.component';
import { MentionsComponent } from './component/mentions/mentions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'epilation',
    component: NavbarComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./component/epilation/epilation.module').then(m => m.EpilationModule)
      }
    ]
  },
  {
    path: 'soins_des_mains',
    component: NavbarComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./component/mains/mains.module').then(m => m.MainsModule)
      }
    ]
  },
  {
    path: 'visage',
    component: NavbarComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./component/visage/visage.module').then(m => m.VisageModule)
      }
    ]
  },
  {
    path: 'corps',
    component: NavbarComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./component/corps/corps.module').then(m => m.CorpsModule)
      }
    ]
  },
  {
    path: 'massage',
    component: NavbarComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./component/massage/massage.module').then(m => m.MassageModule)
      }
    ]
  },
  {
    path: 'maquillage',
    component: NavbarComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./component/maquillage/maquillage.module').then(m => m.MaquillageModule)
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
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
