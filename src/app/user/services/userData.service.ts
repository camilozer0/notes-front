import { Injectable } from '@angular/core';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private _userData: User = {
    id: '',
    fullName: '',
    email: '',
    token: ''
  };

  public get userData(): User {
    return this._userData;
  }

  public set userData(value: User) {
    this._userData = value;
  }

  public clearData() {
    this.userData = {
    id: '',
    fullName: '',
    email: '',
    token: ''
    }
  }

  constructor() { }



}
