import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../shared/material.module';
import { NgrxLandRoutingModule } from './ngrx-land-routing.module';
import { NgrxLandService } from './ngrx-land.service';
import { NgrxLandComponent } from './ngrx-land/ngrx-land.component';
import { NgrxLandEffects } from './store/effects/ngrx-land.effects';
import { reducer } from './store/reducer/ngrx-land.reducer';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgrxLandRoutingModule,
    StoreModule.forFeature('ngrxLandFeature', reducer, {}),
    EffectsModule.forFeature([NgrxLandEffects]),
  ],
  declarations: [NgrxLandComponent],
  providers: [NgrxLandService],
})
export class NgrxLandModule {}
