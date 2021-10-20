import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsLandComponent } from './rxjs-land/rxjs-land.component';

const routes: Routes = [{ path: '', component: RxjsLandComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsLandRouterModule {}
