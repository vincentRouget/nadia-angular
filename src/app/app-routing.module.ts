import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { EpilationComponent } from './component/epilation/epilation.component';
import { MainsComponent } from './component/mains/mains.component';
import { VisageComponent } from './component/visage/visage.component';
import { CorpsComponent } from './component/corps/corps.component';
import { MassageComponent } from './component/massage/massage.component';
import { CommentaryComponent } from './component/commentary/commentary.component';
import { SendCommentaryComponent } from './component/send-commentary/send-commentary.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'commentaires',
    component: CommentaryComponent
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
