import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { NgrxLandRoutingModule } from './ngrx-land-routing.module';
import { NgrxLandComponent } from './ngrx-land/ngrx-land.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgrxLandRoutingModule,
  ],
  exports: [],
  declarations: [NgrxLandComponent],
})
export class NgrxLandModule {}
