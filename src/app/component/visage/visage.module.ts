import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisageComponent } from './visage.component';
import { VisageRoutingModule } from './visage-routing.module';

@NgModule({
    declarations: [VisageComponent],
    imports: [
        CommonModule,
        VisageRoutingModule
    ]
})
export class VisageModule { }
