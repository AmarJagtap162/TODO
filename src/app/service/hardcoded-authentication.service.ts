import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === 'test' && password === '123') {
      sessionStorage.setItem('authenticateUser', username)
      return true;
    }
    return false;
  }

  public isLoggedIn():boolean {
    let user = sessionStorage.getItem('authenticateUser')
    return (user !== null)
  }

  public logout () {
    sessionStorage.removeItem('authenticateUser')
  }
}
