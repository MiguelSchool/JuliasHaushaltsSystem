import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs';
import { map }               from 'rxjs/operators';
// @ts-ignore
import { v4 as uuid }        from 'uuid';

import { LoginState }                  from './feature/auth/share/model/LoginState';
import { LoginStateCollectionService } from './feature/auth/share/store/login-state-collection.service';
import { ToastMessage }                from './feature/shared/model/ToastMessage';
import {
  ToastMessageCollectionServiceService
}                                      from './feature/shared/service/toast-message-collection-service.service';

const initialState: LoginState = {
  id: uuid(),
  isLoggedIn: false,
  success: false,
  token: null
};

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent implements OnInit {
  title = 'JuliasHaushaltsSystem';
  isImpressOpen = false;
  loginState$: Observable<LoginState>;
  toastMessage$: Observable<ToastMessage> | undefined;

  constructor(
    private router: Router,
    private toastMessageCollectionServiceService: ToastMessageCollectionServiceService,
    private loginStateCollectionService: LoginStateCollectionService
  ) {
    const storedLoginState: string | null = localStorage.getItem( 'loginState' );
    const loginState = storedLoginState ? { ...JSON.parse( storedLoginState ), id: uuid() } : initialState;
    this.loginStateCollectionService.addOneToCache( loginState );
    this.loginState$ = this.loginStateCollectionService.entities$.pipe(
      map( states => states[ 0 ] )
    );
  }

  ngOnInit(): void {
    this.toastMessage$ = this.toastMessageCollectionServiceService.entities$.pipe(
      map( toastMessages => toastMessages[ 0 ] )
    );
  }

  onLogout(): void {
    this.loginStateCollectionService.clearCache();
    localStorage.clear();
    this.loginStateCollectionService.addOneToCache( initialState );
    this.router.navigate( [ '/login' ] );
  }
}
