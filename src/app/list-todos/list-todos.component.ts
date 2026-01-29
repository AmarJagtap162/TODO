import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

  todos = [
    new Todo(1, 'learn to dance', false, new Date),
    new Todo(2, 'learn to cricket', false, new Date),

    new Todo(3, 'learn to drive', false, new Date)

  ]

  // todos =[{
  //   id: 1,
  //   description: 'learn to dance'},{
  //   id: 2,
  //   description: 'learn to dance'},{
  //   id: 3,
  //   description: 'learn to drive'}]
}
