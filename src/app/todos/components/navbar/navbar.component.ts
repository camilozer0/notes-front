import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../user/services/user.service';
import { UserInformationService } from '../../../user/services/userInformation.service';
import { User } from '../../../user/interfaces';

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

  public userLoggedIn =  localStorage.getItem( 'token' );
  private userInfo: User = {
    id: '',
    fullName: '',
    email: '',
    token: ''
  }

  constructor(
    private readonly userService: UserService,
    private readonly userData: UserInformationService
  ) {

  }

  ngOnInit(): void {

  }

  logOut() {
    localStorage.removeItem( 'token' );
    // TODO hacer el logout
  }
}
