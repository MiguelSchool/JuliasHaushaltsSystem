import { Injectable }                                           from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable }             from 'rxjs';
import { LoginStateCollectionService } from './login-state-collection.service';

@Injectable()
export class LoginStatusResolver implements Resolve<boolean> {

  constructor( private loginStatusEntityService: LoginStateCollectionService ) { }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> {
    return this.loginStatusEntityService.getAll().pipe(map(t => !!t));
  }
}
