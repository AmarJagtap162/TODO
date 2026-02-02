import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public isDone: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [];
  message: string = '';

  constructor(private todoDataService: TodoDataService, private router:Router
  ) { }

  ngOnInit(): void {
    this.retrieveAllTodos();
  }

retrieveAllTodos() {
    this.todoDataService.retrieveAllTodos('test').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id:number) {
    console.log(`delete todo ${id}`);
    this.todoDataService.deleteTodo('test', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of todo ${id} Successful!`;
        this.retrieveAllTodos();
      }
    );  
  }

  updateTodo(id:number) {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos', id]);
    //this.todoDataService.updateTodo('test', id).subscribe(
    //  response => {
    //    console.log(response);
    //    this.message = `Update of todo ${id} Successful!`;
    //    this.retrieveAllTodos();
    //  }
    //);  
  }

  // todos = [
  //   new Todo(1, 'learn to dance', false, new Date),
  //   new Todo(2, 'learn to cricket', false, new Date),

  //   new Todo(3, 'learn to drive', false, new Date)

  // ]

  // todos =[{
  //   id: 1,
  //   description: 'learn to dance'},{
  //   id: 2,
  //   description: 'learn to dance'},{
  //   id: 3,
  //   description: 'learn to drive'}]
}
