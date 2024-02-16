import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserLogged, UserLogin, UserSignup } from '../../interfaces';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLoginForm: FormGroup;

  public userLogin: UserLogin = {
    email: '',
    password: ''
  }

  public userInfo: UserSignup = {
    fullName: '',
    email: '',
    password: ''
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService,
    private readonly router: Router,
  ) {
    this.userLoginForm = this.fb.group({
      email: [ '', [Validators.required, Validators.email] ],
      password: [ '', [Validators.required, Validators.pattern(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)] ]
    })
  }

  // Se envia la informacion
  onSubmit() {
    const { email, password } = this.userLoginForm.value;
    this.userLogin.email = email;
    this.userLogin.password = password;
    this.userService.loginUser( this.userLogin ).subscribe( userData => {
      if ( userData && userData.token ) {
        this.router.navigate(['/todos/alltime']);
        //this.userInfo = userData;
      } else {
        console.error('Incorrect email or password')
      }
    })

  }

}
