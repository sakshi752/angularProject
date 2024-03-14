import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = { sno: 0, title: '', desc: '', active:true }; 
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todo){
    // note: todoDelete is type of custom event
    this.todoDelete.emit(todo)
    // alert('i am clicked')
  }
}
