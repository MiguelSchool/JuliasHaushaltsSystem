import { Component, OnDestroy }                            from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterFormGroup }                               from '../../share/model/RegisterFormGroup';
import { RegisterUser }                                    from '../../share/model/RegisterUser';
import { AuthService }                                     from '../../share/auth.service';
import {
  ToastMessageCollectionServiceService
}                                                          from '../../../shared/service/toast-message-collection-service.service';
import { Subject, takeUntil }                              from 'rxjs';
import { LoginStateCollectionService } from '../../share/store/login-state-collection.service';
import { TokenState }                  from '../../share/model/RegisterStatus';
import { Router }                      from '@angular/router';
// @ts-ignore
import { v4 as uuid }                                      from 'uuid';

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.scss' ]
} )
export class RegisterComponent implements OnDestroy {

  formGroup: FormGroup;
  private unsubscribe$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private loginStateCollectionService: LoginStateCollectionService,
    private router: Router,
    private toastMessageCollectionService: ToastMessageCollectionServiceService
  ) {
    this.formGroup = this.fb.group<RegisterFormGroup>( {
      firstName: new FormControl<any>( '', [ Validators.required, Validators.minLength( 5 ) ] ),
      lastName: new FormControl<any>( '', [ Validators.required, Validators.minLength( 5 ) ] ),
      email: new FormControl<any>( '', [ Validators.required, Validators.minLength( 10 ) ] ),
      password: new FormControl<any>( '', [ Validators.required ] )
    } );
  }

  onRegister(): void {
    const registerUser: RegisterUser = this.formGroup.value;
    console.log(registerUser)
    this.authService.register( registerUser ).pipe( takeUntil( this.unsubscribe$ ) )
      .subscribe( ( registerStatus: TokenState ) => {
          this.loginStateCollectionService.clearCache();
          this.loginStateCollectionService.addOneToCache( {
            isLoggedIn: true,
            success: true,
            token: registerStatus.token,
            username: '',
            id: uuid().toString()
          } );
          this.router.navigate( [ '/home' ] );
          this.toastMessageCollectionService
            .addOneToCache( { id: 'key', status: true, message: 'registration complete' } );
          setTimeout( () => {
            this.toastMessageCollectionService.clearCache();
          }, 1000 );
        }
      );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }

}
