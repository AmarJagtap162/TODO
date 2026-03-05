import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './logout/login/login.component';
import { WelcoomeComponent } from './welcoome/welcoome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { CounterComponent } from './task/counter/counter.component';
import { TodoComponent } from './todo/todo.component';
import { ParentComponent } from './task/ParentToChild/parent/parent.component';
import { ChildComponent } from './task/ParentToChild/child/child.component';
import { Parent1Component } from './task/childToParent/parent1/parent1.component';
import { Child1Component } from './task/childToParent/child1/child1.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcoomeComponent, canActivate: [RouteGuardService] },
  { path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService] },
  { path: 'counter', component: CounterComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'parent1', component: Parent1Component },
  { path: 'child1', component: Child1Component },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
