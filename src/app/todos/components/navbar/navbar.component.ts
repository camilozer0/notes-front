import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../../../user/interfaces';
import { UserDataService } from '../../../user/services/userData.service';

@Component({
  selector: 'todos-navbar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  public isUserLoggedIn: boolean;

  public userInfo: User = {
    id: '',
    fullName: '',
    email: '',
    token: ''
  }

  constructor(
    private readonly userData: UserDataService
  ) {
    this.isUserLoggedIn = false;
  }

  ngOnInit(): void {
    const { id, email, fullName, token } = this.userData.userData;
    if ( !(token.length === 0) ) {
      this.isUserLoggedIn = true
      this.userInfo.email = email;
      this.userInfo.id = id;
      this.userInfo.fullName = fullName;
      this.userInfo.token = token;
    };
  }

  logOut() {
    localStorage.removeItem( 'token' );
    this.isUserLoggedIn = false;
    this.userData.clearData();
    this.userInfo = {
      id: '',
      fullName: '',
      email: '',
      token: ''
    }
    // TODO hacer el logout
  }
}
