import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaquillageComponent } from './maquillage.component';
import { MaquillageRoutingModule } from './maquillage-routing.module';

@NgModule({
    declarations: [MaquillageComponent],
    imports: [
        CommonModule,
        MaquillageRoutingModule
    ]
})
export class MaquillageModule { }
