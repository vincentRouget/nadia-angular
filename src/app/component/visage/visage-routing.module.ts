import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisageComponent } from './visage.component';

const routes: Routes = [
    { path: '', component: VisageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VisageRoutingModule { }
