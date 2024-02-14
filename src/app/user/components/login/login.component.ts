import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

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

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.userLoginForm = this.fb.group({
      email: [ '', [Validators.required, Validators.email] ],
      password: [ '', [Validators.required, Validators.pattern(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)] ]
    })
  }

  onSubmit() {

  }

}
