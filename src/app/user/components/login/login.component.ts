import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserLogin } from '../../interfaces';

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

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService
  ) {
    this.userLoginForm = this.fb.group({
      email: [ '', [Validators.required, Validators.email] ],
      password: [ '', [Validators.required, Validators.pattern(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)] ]
    })
  }

  onSubmit() {
    const { email, password } = this.userLoginForm.value;
    this.userLogin.email = email;
    this.userLogin.password = password;
    this.userService.loginUser( this.userLogin ).subscribe( login => {
      console.log(login)
    })

  }

}
