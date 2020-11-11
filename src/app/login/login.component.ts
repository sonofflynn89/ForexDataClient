import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LoginBody } from '../interfaces';

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
  subscription = 'Premium';

  constructor(private api: ApiService) { }

  ngOnInit(): void {}

  login() {
    if (this.username && this.password) {
      const body: LoginBody = {
        username: this.username,
        password: this.password
      }
      this.api.login(body).subscribe(
        (res: any) => console.log(res),
        (error: any) => console.log(error)
      )
    }
  }

  clearInputs() {
    this.first_name = '';
    this.last_name = '';
    this.username = '';
    this.password = '';
    this.subscription = 'Premium';
  }

}
