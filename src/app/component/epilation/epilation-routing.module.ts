import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpilationComponent } from './epilation.component';

const routes: Routes = [
    { path: '', component: EpilationComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EpilationRoutingModule { }
