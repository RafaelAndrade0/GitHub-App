import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorRouteComponent } from '@shared/component/error-route/error-route.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'repos',
    loadChildren: () =>
      import('./modules/repos/repos.module').then((m) => m.ReposModule),
  },
  {
    path: 'stars',
    loadChildren: () =>
      import('./modules/stars/stars.module').then((m) => m.StarsModule),
  },
  { path: '**', pathMatch: 'full', component: ErrorRouteComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
