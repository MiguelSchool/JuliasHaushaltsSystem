import { Component }                            from '@angular/core';
import { CommonModule }                         from '@angular/common';
import { BsDropdownModule }                     from 'ngx-bootstrap/dropdown';
import { Observable }                           from 'rxjs';
import { LoginState }                           from '../../../auth/share/model/LoginState';
import { ToastMessage }                         from '../../model/ToastMessage';
import { Router }                               from '@angular/router';
import { ToastMessageCollectionServiceService } from '../../service/toast-message-collection-service.service';
import { LoginStateCollectionService }          from '../../../auth/share/store/login-state-collection.service';
import { BreakpointObserver, BreakpointState }  from '@angular/cdk/layout';
import { map }                                  from 'rxjs/operators';
// @ts-ignore
import { v4 as uuid }        from 'uuid';

const initialState: LoginState = {
  id: uuid(),
  isLoggedIn: false,
  success: false,
  token: null
};
@Component({
  selector: 'app-mobile-menue',
  standalone: true,
    imports: [ CommonModule, BsDropdownModule ],
  templateUrl: './mobile-menue.component.html',
  styleUrls: ['./mobile-menue.component.scss']
})
export class MobileMenueComponent {
  isImpressOpen = false;
  loginState$: Observable<LoginState>;
  toastMessage$: Observable<ToastMessage> | undefined;
  isLoading$: Observable<boolean> | undefined;
  showContainer$: Observable<boolean> | undefined;


  constructor(
    private router: Router,
    private toastMessageCollectionServiceService: ToastMessageCollectionServiceService,
    private loginStateCollectionService: LoginStateCollectionService,
    private breakpointObserver: BreakpointObserver
  ) {
    const storedLoginState: string | null = localStorage.getItem( 'loginState' );
    const loginState = storedLoginState ? { ...JSON.parse( storedLoginState ), id: uuid() } : initialState;
    this.loginStateCollectionService.addOneToCache( loginState );
    this.loginState$ = this.loginStateCollectionService.entities$.pipe(
      map( states => states[ 0 ] )
    );
  }

  ngOnInit(): void {
    this.isLoading$ = this.loginStateCollectionService.loading$;
    this.toastMessage$ = this.toastMessageCollectionServiceService.entities$.pipe(
      map( toastMessages => toastMessages[ 0 ] )
    );
    this.showContainer$ = this.breakpointObserver.observe( [ '(min-width: 785px' ] ).pipe(
      map( ( state: BreakpointState ) => state && state.matches )
    );
  }

  onLogout(): void {
    this.loginStateCollectionService.clearCache();
    localStorage.clear();
    this.loginStateCollectionService.addOneToCache( initialState );
    this.router.navigate( [ '/login' ] );
  }
}
