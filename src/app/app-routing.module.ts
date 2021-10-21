import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UsersModule),
  },
  {
    path: 'rxjs-land',
    loadChildren: () =>
      import('./rxjs-land/rxjs-land.module').then((m) => m.RxjsLandModule),
  },
  {
    path: 'ngrx-land',
    loadChildren: () =>
      import('./ngrx-land/ngrx-land.module').then((m) => m.NgrxLandModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
