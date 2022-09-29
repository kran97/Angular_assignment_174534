import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authGuard/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'route1',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    loadChildren: () => import('./feature-modules/route1/route1.module').then(m => m.Route1Module)
  },
  {
    path: 'route2',
    loadChildren: () => import('./feature-modules/route2/route2.module').then(m => m.Route2Module)
  },
  {
    path: 'route3',
    loadChildren: () => import('./feature-modules/route3/route3.module').then(m => m.Route3Module)
  },
  {
    path: 'route4',
    loadChildren: () => import('./feature-modules/route4/route4.module').then(m => m.Route4Module)
  },
  {
    path: 'route5',
    loadChildren: () => import('./feature-modules/route5/route5.module').then(m => m.Route5Module)
  },
  {
    path: 'route6',
    loadChildren: () => import('./feature-modules/route6/route6.module').then(m => m.Route6Module)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
