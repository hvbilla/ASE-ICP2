import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    clonepwd: '',
    email: ''
  }

  passwordError = false;

  constructor() { }

  ngOnInit() {
  }

  submitCredentials() {
    localStorage.setItem('cred', JSON.stringify(this.signup));
    console.log(this.signup);
  }

  matchPassword() {
    if(this.signup.password == this.signup.clonepwd) {
      this.passwordError = false;
    } else {
      this.passwordError = true;
    }
  }

}
