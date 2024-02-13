import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userSignupGroup: FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ) {

this.userSignupGroup = this.fb.group({
  fullName: [ '', [ Validators.required, Validators.minLength(4) ] ],
  email: [ '', [ Validators.required, Validators.email ] ],
  password: [ '', [ Validators.required, Validators.minLength(8), Validators.pattern('/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/') ] ]
})

  }

}
