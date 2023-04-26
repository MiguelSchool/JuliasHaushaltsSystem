import { Injectable }         from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { RegisterUser }         from './model/RegisterUser';
import { map, Observable, tap } from 'rxjs';
import { TokenState }           from './model/RegisterStatus';
import { LoginUser }            from './model/LoginUser';
import { LoginState } from './model/LoginState';

type RefreshResponse = {
  token: string
}

type LogoutResponse = {
  message: string;
}
@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  baseUrl: string = 'http://localhost:8180/auth';

  constructor( private httpClient: HttpClient ) { }

  register( registerUser: RegisterUser ): Observable<TokenState> {
    console.log(registerUser)
      return this.httpClient.post<TokenState>( `${ this.baseUrl }/register`, registerUser )
  }

  login( loginUser: LoginUser ): Observable<TokenState> {
    return this.httpClient.post<TokenState>( `${ this.baseUrl }/login`, loginUser, { withCredentials: true } );
  }

  refreshToken(oldToken: string): Observable<string> {
    const url = `${this.baseUrl}/refresh`
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append("Authorization",`${oldToken}`)

    return this.httpClient.post<RefreshResponse>(url,{},{ withCredentials: true}).pipe(
      map((response) => response.token)
    )
  }

  logout(): Observable<string> {
    const url = `${this.baseUrl}/logout`
    return this.httpClient.post<LogoutResponse>(url,{},{ withCredentials: true}).pipe(
      map((response) => response.message)
    )
  }
}
