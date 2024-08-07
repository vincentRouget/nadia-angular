import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MassageComponent } from './massage.component';
import { MassageRoutingModule } from './massage-routing.module';

@NgModule({
    declarations: [MassageComponent],
    imports: [
        CommonModule,
        MassageRoutingModule
    ]
})
export class MassageModule { }
