import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserSignup } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  userSignupForm: FormGroup;

  public userSignup: UserSignup = {
    fullName: '',
    email: '',
    password: ''
  }

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.userSignupForm = this.fb.group({
      fullName: [ '', [ Validators.required, Validators.minLength(4) ] ],
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength(8), Validators.pattern(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/) ] ]
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  onSubmit() {
    const { fullName, email, password }= this.userSignupForm.value;
    this.userSignup.fullName = fullName;
    this.userSignup.email = email;
    this.userSignup.password = password;
    console.log(this.userSignup)
  }


}
