import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo = '';

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Second Todo',
        completed: false
      }
    ];
  }
  // tslint:disable-next-line:typedef
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i === id) {
        v.completed = !v.completed;
      }
      return v;
    });
  }

  // tslint:disable-next-line:typedef
  deleteTodo(id: number){
    this.todos = this.todos
      .filter((v, i) => i !== id);
  }

  // tslint:disable-next-line:typedef
  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = '';
  }
}
