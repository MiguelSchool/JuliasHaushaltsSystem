import { Component }                          from '@angular/core';
import { LoginStateCollectionService }        from '../../share/store/login-state-collection.service';
import { Router }                             from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
} )
export class LoginComponent {

  formGroup: FormGroup | undefined;

  constructor(
    private loginStateCollectionService: LoginStateCollectionService,
    private router: Router,
    private fb: FormBuilder ) {
    this.formGroup = this.fb.group( {
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength( 8 ) ] ]
    } );
  }

  onLogin(): void {
    this.loginStateCollectionService.add( this.formGroup?.value );
  }
}
