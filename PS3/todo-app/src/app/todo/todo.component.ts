import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Импортируем FormsModule для использования ngModel

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Добавляем FormsModule в imports
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: { text: string, completed: boolean }[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
