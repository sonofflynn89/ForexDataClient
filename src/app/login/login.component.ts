import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { LoginBody, CreateUserBody } from '../interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  showLogin = true;

  // User Inputs
  first_name = '';
  last_name = '';
  username = '';
  password = '';
  subscription: 'Premium' | 'Basic' = 'Premium';

  // Error Flags
  loginError = false;
  signupError = false;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {}

  login() {
    if (this.username && this.password) {
      const body: LoginBody = {
        username: this.username,
        password: this.password
      }
      this.reset();
      this.api.login(body).subscribe(
        (user_id: string) => this.router.navigate(['dashboard', user_id]),
        () => this.loginError = true
      );
    } else {
      this.loginError = true;
    }
  }

  signup() {
    const fields = [
      this.first_name, 
      this.last_name, 
      this.username, 
      this.password, 
      this.subscription,
    ];

    if (fields.every(field => field)) {
      const body: CreateUserBody = {
        first_name: this.first_name,
        last_name: this.last_name,
        username: this.username,
        password: this.password,
        subscription_type: this.subscription,
      }
      this.api.createUser(body).subscribe(
        (user_id: string) => {
          this.reset();
          this.router.navigate(['dashboard', user_id]);
        },
        () => this.signupError = true
      );

    } else {
      this.signupError = true;
    }
  }

  reset() {
    this.first_name = '';
    this.last_name = '';
    this.username = '';
    this.password = '';
    this.subscription = 'Premium';
    this.loginError = false;
    this.signupError = false;
  }

}
