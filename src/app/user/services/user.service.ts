import cryptoJs from 'crypto-js';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserLogin, UserSignup } from '../interfaces';
import { Observable, tap } from 'rxjs';
import { UserDataService } from './userData.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = 'http://localhost:3000/api';

  //TODO: volver una .env
  private secretKey = "MyNameIsHuman";

  constructor(
    private readonly http: HttpClient,
    private readonly userSharedData: UserDataService,
  ) { }

  storeToken(token: string) {
    const encryptedToken = cryptoJs.AES.encrypt( token, this.secretKey ).toString();
    console.log({'tokenBeforeBeingStored': token})
    console.log({'EncryptedtokenBeforeBeingStored': encryptedToken})
    localStorage.setItem( 'token', JSON.stringify(encryptedToken) );
  }

  // Con este metodo creamos un nuevo usuario
  createNewUser( userSignUp: UserSignup ): Observable<User> {
    const url = `${ this.apiUrl }/auth/signup`;
    return this.http.post<User>( url, userSignUp ).pipe(
      tap(userData => this.storeToken( userData.token )),
      tap(userData => {
        this.userSharedData.userData = userData
      })
    )
  }

  // Con este metodo hacemos login
  // TODO verifiar lo que se recibe cuando se hace login
  loginUser( userLogin: UserLogin ): Observable<User> {
    const url = `${ this.apiUrl }/auth/login`;
    return this.http.post<User>( url, userLogin).pipe(
      tap(userData => this.storeToken( userData.token )),
      tap(userData => {
        this.userSharedData.userData = userData
      })
    )
  }

}
