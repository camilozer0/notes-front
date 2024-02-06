import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ToDo } from '../../interfaces/todo.interface';
import { ModalComponent } from '../modal/modal.component';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'component-todos-table',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent
  ],
  templateUrl: './todos-table.component.html',
  styleUrl: './todos-table.component.css'
})
export class TodosTableComponent implements OnInit {

  constructor(
    private readonly todoService: TodosService
  ) {

  }

  @Input()
  public todos: ToDo[] = [];

  @Input()
  public toDosTitle: string = '';

  public today: Date = new Date();
  showModal = false;
  public selectedTodo: ToDo = {
    id: '',
    title: '',
    description: '',
    dueDate: '',
    isActive: true,
    tags: []
  };

  ngOnInit(): void {
    this.today = new Date();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if ( changes['todos']) {
      this.todos = changes['todos'].currentValue;
    }
  }

  toggleModal( todo: ToDo ) {
    let selectedTodo = todo;
    this.showModal = !this.showModal;
  }

  deleteTodo(todo: ToDo) {
    console.log({todo})
    const todoId = todo.id;
    this.todoService.removeTodo( todoId );
  }

  archiveTodo() {
    
  }

}
