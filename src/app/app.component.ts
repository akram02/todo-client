import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private todoDataService: TodoDataService) {}
  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }
  onToggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }
  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }
  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
