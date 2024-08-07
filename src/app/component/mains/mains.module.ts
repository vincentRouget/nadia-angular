import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainsComponent } from './mains.component';
import { MainsRoutingModule } from './mains-routing.module';

@NgModule({
    declarations: [MainsComponent],
    imports: [
        CommonModule,
        MainsRoutingModule
    ]
})
export class MainsModule { }
