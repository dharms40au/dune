import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxLandComponent } from './ngrx-land/ngrx-land.component';

const routes: Routes = [{ path: '', component: NgrxLandComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgrxLandRoutingModule {}
