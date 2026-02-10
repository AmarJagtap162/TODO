import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: String) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    //    console.log("Hello World Bean Service")
    return this.http.get<HelloWorldBean>('http://localhost:8080/api/hello-world-bean');
  }

  executeHelloWorldServiceWithPathVariable(name: any) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/api/hello-world/${name}`, {
      headers: {
        Authorization: this.createBasicAuthenticationHttpHeader()
      }
    } );
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'test'  
    let password = '123'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

}
