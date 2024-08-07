import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MassageComponent } from './massage.component';

const routes: Routes = [
    { path: '', component: MassageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MassageRoutingModule { }