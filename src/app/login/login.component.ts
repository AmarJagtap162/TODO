import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = 'test'
  password = '123'
  errorMessage = 'Invalid credentials'
  invalidLogin = false;

  //router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router: Router, private hardCodeAuthenticationService: HardcodedAuthenticationService) {

  }

  handleLogin() {
    console.log(this.username + " password -> " + this.password + " = " + this.invalidLogin)
    //if (this.username === 'test' && this.password === '123') {
    if (this.hardCodeAuthenticationService.authenticate(this.username, this.password)) {
      // redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
