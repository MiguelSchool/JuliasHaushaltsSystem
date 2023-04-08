import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from './feature/components/home/home.component';
import { MobileMenueComponent } from './feature/shared/components/mobile-menue/mobile-menue.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'social-group',
    loadChildren: () => import('./feature/components/social-group/social-group.module')
      .then( m => m.SocialGroupModule )
  },
  {
    path: 'mobile-menue',
    component: MobileMenueComponent
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {}
