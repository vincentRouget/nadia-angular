import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { LaiusComponent } from './component/laius/laius.component';
import { PrestationComponent } from './component/prestation/prestation.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CommentaryComponent } from './component/commentary/commentary.component';
import { NavbarAccueilComponent } from './component/navbar-accueil/navbar-accueil.component';
import { SendCommentaryComponent } from './component/send-commentary/send-commentary.component';
import { FooterComponent } from './component/footer/footer.component';
import { MomentComponent } from './component/moment/moment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LaiusComponent,
    PrestationComponent,
    NavbarComponent,
    MomentComponent,
    CommentaryComponent,
    NavbarAccueilComponent,
    SendCommentaryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
