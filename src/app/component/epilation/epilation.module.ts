import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpilationComponent } from './epilation.component';
import { EpilationRoutingModule } from './epilation-routing.module';

@NgModule({
    declarations: [EpilationComponent],
    imports: [
        CommonModule,
        EpilationRoutingModule
    ]
})
export class EpilationModule { }
