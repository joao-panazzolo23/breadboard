import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './core/layout/main-layout/main-layout.component';
import {AuthLayoutComponent} from './core/layout/auth-layout/auth-layout.component';
import {NgModule} from '@angular/core';
import {AuthGuard} from './core/guards/auth-guard.service';

export const routes: Routes = [

  // LOGIN
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./features/auth/auth-routing.module')
            .then(m => m.AuthRoutingModule)
      }
    ]
  },

  // SISTEMA
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/routes/home-route')
            .then(m => m.HomeRoutes)
      }
    ]
  },

  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
