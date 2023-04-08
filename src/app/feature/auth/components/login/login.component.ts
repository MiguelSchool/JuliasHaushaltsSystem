import { Component }                            from '@angular/core';
import { LoginStateCollectionService }          from '../../share/store/login-state-collection.service';
import { Router }                               from '@angular/router';
import { FormBuilder, FormGroup, Validators }   from '@angular/forms';
import { ToastMessageCollectionServiceService } from '../../../shared/service/toast-message-collection-service.service';
import { ToastMessage }                         from '../../../shared/model/ToastMessage';
// @ts-ignore
import { v4 as uuid }                           from 'uuid';
import { LoginUser }                            from '../../share/model/LoginUser';
import { AuthService }                          from '../../share/auth.service';
import { map }                                 from 'rxjs/operators';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable, tap }                     from 'rxjs';
import { LoginState }                           from '../../share/model/LoginState';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
} )
export class LoginComponent {

  formGroup: FormGroup | undefined;
  toastMessage$: Observable<ToastMessage> | undefined;
  isLoading$: Observable<boolean> | undefined;
  showContainer$: Observable<boolean> | undefined;
  loginStage: LoginState | undefined;

  constructor(
    private loginStateCollectionService: LoginStateCollectionService,
    private toastService: ToastMessageCollectionServiceService,
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private fb: FormBuilder ) {
    this.formGroup = this.fb.group( {
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength( 8 ) ] ]
    } );
  }

  onLogin(): void {
    if(this.formGroup?.value) {
      const loginUser: LoginUser = this.formGroup.value;
      this.authService.login(loginUser).pipe().subscribe((loginState) => {
        console.log(loginState)
        this.loginStage = {
          isLoggedIn: true,
          success: true,
          token: loginState.token,
          username: '',
          id: uuid().toString()
        }
        this.loginStateCollectionService.clearCache();
        this.loginStateCollectionService.addOneToCache(this.loginStage);
        if ( this.loginStage && this.loginStage.isLoggedIn ) {
          document.body.offsetWidth < 800 ?
          this.router.navigate(['/mobile-menue']) :
          this.router.navigate(['/home'])
        }
      })
      this.setNewToastMessage( { id: 'key',message: 'Login war erfolgreich!', status: true } );
      setTimeout( () => { this.toastService.clearCache(); }, 1000 );
      console.log(this.loginStage)
    }
  }

  private setNewToastMessage( toastMessage: ToastMessage ) {
    const id = uuid();
    this.toastService.addOneToCache(
      {
        ...toastMessage,
        id: id
      }
    );
  }
}
// this.router.navigate(['/mobile-menue'])
// this.router.navigate(['/home'])
