import { Injectable }                                                          from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { LoginState }                                                          from '../model/LoginState';
import { LoginStatusDataService }                                              from './login-status-data.service';

@Injectable()
export class LoginStateCollectionService extends EntityCollectionServiceBase<LoginState> {

  constructor( private entityCollectionServiceElementsFactory: EntityCollectionServiceElementsFactory, private dataservice: LoginStatusDataService ) {
    super( 'LoginState', entityCollectionServiceElementsFactory );
      }

  override addOneToCache(entity: LoginState) {
      super.addOneToCache(entity);
      localStorage.setItem('loginState', JSON.stringify(entity));
  }

}
