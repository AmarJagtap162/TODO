import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './logout/login/login.component';
import { WelcoomeComponent } from './welcoome/welcoome.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { CounterComponent } from './task/counter/counter.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { ParentComponent } from './task/ParentToChild/parent/parent.component';
import { ChildComponent } from './task/ParentToChild/child/child.component';
import { Parent1Component } from './task/childToParent/parent1/parent1.component';
import { Child1Component } from './task/childToParent/child1/child1.component';
import { HttpInterceptorBasicAuthService } from './service/http/http-interceptor-basic-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcoomeComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    CounterComponent,
    TodoComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, 
        useClass: HttpInterceptorBasicAuthService, 
        multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
