import { Component } from '@angular/core';
import { User } from '../../interfaces';
import { UserDataService } from '../../services';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {

  public userInfo: User = {
    id: '',
    fullName: '',
    email: '',
    token: ''
  }

  constructor(
    private readonly userData: UserDataService,
  ) {
    const { id, fullName, email, token } = this.userData.userData;
    this.userInfo.id = id;
    this.userInfo.email = email;
    this.userInfo.token = token;
    this.userInfo.fullName = fullName;
    console.log(this.userData.userData)
  }

}
