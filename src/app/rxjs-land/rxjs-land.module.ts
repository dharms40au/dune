import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { RxjsLandRouterModule } from './rxjs-land-routing.module';
import { RxjsLandComponent } from './rxjs-land/rxjs-land.component';
import { RxjsLandService } from './rxjs-land/rxjs-land.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RxjsLandRouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [RxjsLandComponent],
  providers: [RxjsLandService],
})
export class RxjsLandModule {}
