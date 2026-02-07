import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './core/layout/main-layout/main-layout.component';
import {AuthLayoutComponent} from './core/layout/auth-layout/auth-layout.component';
import {NgModule} from '@angular/core';
import {AuthGuard} from './core/guards/auth-guard.service';

export const routes: Routes = [

  {
    path: 'login',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./features/auth/auth.module')
        .then(m => m.AuthModule)
  },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [

      // {
      //   path: 'dashboard',
      //   loadChildren: () =>
      //     import('./features/dashboard/dashboard.module')
      //       .then(m => m.DashboardModule)
      // },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },

  {path: '**', redirectTo: 'login'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
