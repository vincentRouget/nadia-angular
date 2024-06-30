import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './component/header/header.component';
import { LaiusComponent } from './component/laius/laius.component';
import { PrestationComponent } from './component/prestation/prestation.component';
import { EpilationComponent } from './component/epilation/epilation.component';
import { MainsComponent } from './component/mains/mains.component';
import { VisageComponent } from './component/visage/visage.component';
import { CommentaryComponent } from './component/commentary/commentary.component';
import { SendCommentaryComponent } from './component/send-commentary/send-commentary.component';
import { FooterComponent } from './component/footer/footer.component';
import { MomentComponent } from './component/moment/moment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LaiusComponent,
    PrestationComponent,
    EpilationComponent,
    MainsComponent,
    VisageComponent,
    MomentComponent,
    CommentaryComponent,
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
  bootstrap: [
    AppComponent,
    HeaderComponent,
    LaiusComponent,
    PrestationComponent,
    EpilationComponent,
    MainsComponent,
    VisageComponent,
    MomentComponent,
    CommentaryComponent,
    SendCommentaryComponent,
    FooterComponent,
  ]
})
export class AppModule { }
