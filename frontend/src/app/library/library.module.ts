import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { CardComponent } from './card/card.component';
import { AllcardsComponent } from './allcards/allcards.component';


@NgModule({
  declarations: [
    CardComponent,
    AllcardsComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
