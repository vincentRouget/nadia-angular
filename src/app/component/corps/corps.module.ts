import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorpsComponent } from './corps.component';
import { CorpsRoutingModule } from './corps-routing.module';

@NgModule({
    declarations: [CorpsComponent],
    imports: [
        CommonModule,
        CorpsRoutingModule
    ]
})
export class CorpsModule { }
