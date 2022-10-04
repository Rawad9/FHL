import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordsRoutingModule } from './records-routing.module';
import { RecordComponent } from './record/record.component';


@NgModule({
  declarations: [
    RecordComponent
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule
  ]
})
export class RecordsModule { }
