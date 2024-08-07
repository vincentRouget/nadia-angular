import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaquillageComponent } from './maquillage.component';

const routes: Routes = [
    { path: '', component: MaquillageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaquillageRoutingModule { }