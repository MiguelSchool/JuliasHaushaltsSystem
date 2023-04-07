import { Injectable }                                   from '@angular/core';
import { DefaultDataService, HttpUrlGenerator, Logger } from '@ngrx/data';
import { LoginState }                                   from '../model/LoginState';
import { HttpClient }                                   from '@angular/common/http';

@Injectable()
export class LoginStatusDataService extends DefaultDataService<LoginState> {

  baseUrl: string = 'http://localhost:8080/auth';

  constructor( private httpClient: HttpClient, httpUrlGenerator: HttpUrlGenerator,private logger: Logger ) {
    super( 'LoginState', httpClient, httpUrlGenerator );
  }

}
