import { NgModule }                                   from '@angular/core';
import { CommonModule }                               from '@angular/common';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { LoginStatusDataService }                     from './share/store/login-status-data.service';
import { entityMetaData }                             from './share/store/entity-meta.data';
import { RouterModule, Routes }                       from '@angular/router';
import { LoginComponent }                             from './components/login/login.component';
import { RegisterComponent }                          from './components/register/register.component';
import { LoginStateCollectionService }                from './share/store/login-state-collection.service';
import { ReactiveFormsModule }                        from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule( {
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    ReactiveFormsModule,
  ],
  providers: [
    LoginStatusDataService,
    LoginStateCollectionService,
  ]
} )
export class AuthModule {
  /**
   * necessary for lacy loaded modules
   */
  constructor(
    private entityDefinitionService: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private loginStatusService: LoginStateCollectionService,
    private loginStatusDataService: LoginStatusDataService ) {
    entityDefinitionService.registerMetadataMap( entityMetaData );
    entityDataService.registerService( 'LoginState', loginStatusDataService );

  }
}

