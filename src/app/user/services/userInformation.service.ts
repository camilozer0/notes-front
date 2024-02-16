import { Injectable } from '@angular/core';
import { UserLogged } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  userInfo: UserLogged = {
    id: '',
    email: '',
    password: '',
    token: ''
  }

  constructor() { }

  get userId(): string {
    return this.userInfo.id;
  }

  get userEmail(): string {
    return this.userInfo.email;
  }

  set userId( id: string ) {
    this.userInfo.id = id;
  }

  set userEmail( email: string ) {
    this.userInfo.email =  email;
  }

}
