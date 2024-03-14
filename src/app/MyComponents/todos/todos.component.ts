import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title = 'To do list';
  localItem: string = "";
  todos: Todo[] = []

  newTodo: Todo = {
    sno: 0,
    title: '',
    desc: '',
    active: true
  };

  constructor() {
    this.localItem = localStorage.getItem('todos') as string;
    if (this.localItem === null) {
      this.todos = [];
    } 
    else {
      this.todos = JSON.parse(this.localItem); 
    }
  }
  

  ngOnInit(): void {
  }

  addTodo() {
    if (this.newTodo.title!=="" || this.newTodo.desc!=="") {
      
      this.newTodo.sno = this.todos.length + 1;
      this.todos.push(this.newTodo);
      this.newTodo = {
        sno: 0,
        title: '',
        desc: '',
        active: true
      };
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
    else{
      alert("enter the fields first")
    }
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.updateSerialNo()
    }
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
  updateSerialNo() {
    for (let i = 0; i < this.todos.length; i++) {
      this.todos[i].sno = i + 1;
    }
  }
}

