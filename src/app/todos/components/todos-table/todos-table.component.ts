import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ToDo } from '../../interfaces/todo.interface';
import { ModalComponent } from '../modal/modal.component';
import { TodosService } from '../../services/todos.service';
import { UpdateTodo } from '../../interfaces/updateTodo.interface';

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
  // public updateTodo: UpdateTodo = {
  //   title: '',
  //   description: '',
  //   dueDate: '',
  //   isActive: true,
  //   tags: []
  // }

  constructor(
    private readonly todoService: TodosService
  ) { }

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
    this.selectedTodo = todo;
    this.showModal = !this.showModal;
  }

  clearTodo() {
    this.selectedTodo = {} as ToDo;
    this.toggleModal(this.selectedTodo);
  }

  archiveTodo(todo: ToDo) {
    todo.isActive = !todo.isActive;
    const {  id, ...updateTodo } = todo;
    this.todoService.updateTodo( id, updateTodo ).subscribe(res =>
      console.log(res))
  }

  updateTodo( todo: ToDo ) {
    console.log('Vamos a actualizaar')

    //this.todoService.updateTodo( todo )
  }

  deleteTodo(todo: ToDo) {
    const todoId = todo.id;
    this.todoService.removeTodo( todoId ).subscribe( res =>
      console.log(res))
  }
}
