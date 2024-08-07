import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentionsComponent } from './mentions.component';
import { MentionsRoutingModule } from './mentions-routing.module';

@NgModule({
    declarations: [MentionsComponent],
    imports: [
        CommonModule,
        MentionsRoutingModule
    ]
})
export class MentionsModule { }
