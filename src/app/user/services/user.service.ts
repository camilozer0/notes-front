import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserLogin, UserSignup } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = 'http://localhost:3000/api';

  constructor(
    private readonly http: HttpClient
  ) { }

  // Con este metodo creamos un nuevo usuario
  createNewUser( userSignUp: UserSignup ): Observable<User> {
    const url = `${ this.apiUrl }/auth/signup`;
    return this.http.post<User>( url, userSignUp )
  }

  // Con este metodo hacemos login
  // TODO verifiar lo que se recibe cuando se hace login
  loginUser( userLogin: UserLogin ): Observable<any> {
    const url = `${ this.apiUrl }/auth/login`;
    return this.http.post<any>( url, userLogin)
  }

}
