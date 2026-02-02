import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number = 0;
  todo: Todo = null as any;
  constructor(private todoservice: TodoDataService) { }

  ngOnInit(): void {
    this.todoservice.retrieveTodo('test', this.id).subscribe(
      data => this.todo = data
    )
  }

}

function saveTodo() {
  console.log("save todo");
}
