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

  constructor(
    private readonly todoService: TodosService
  ) { }

  ngOnInit(): void {
    this.today = new Date();
  }

  // Mira los cambios que tiene el arreglo de todos para pintarlos en la pantalla
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if ( changes['todos']) {
      this.todos = changes['todos'].currentValue;
    }
  }

  // Para hacer aparecer/desaparecer el modal
  // toggleModal( todo: ToDo ) {
    toggleModal() {
    // this.selectedTodo = todo;
    this.showModal = !this.showModal;
  }

  // Cuando se envia el formulario
  onEditedTodo( todo: ToDo ){
    this.selectedTodo = todo;
    ( this.selectedTodo.id ) ? this.updateTodo(this.selectedTodo) : this.createTodo( this.selectedTodo) ;
    this.showModal = !this.showModal;
  }

  // Cuando se presiona el boton de agregar nueva tarea
  clearTodo() {
    this.selectedTodo = {} as ToDo;
    this.toggleModal();
  }

  editTodo( todo: ToDo ) {
    this.selectedTodo = todo;
    this.toggleModal();
  }

  // Crear una tarea nueva
  createTodo( createTodo: ToDo ) {
    console.log('Voy a crear un todo nuevo', createTodo)
    this.todoService.addTodo( createTodo ).subscribe( newTodo => {
      console.log(newTodo);
      window.location.reload();
    })
  }

  // Cuando se presiona el boton de archivar una tarea
  archiveTodo(todo: ToDo) {
    todo.isActive = !todo.isActive;
    const {  id, ...updateTodo } = todo;
    this.todoService.updateTodo( id, updateTodo ).subscribe(archTodo =>
      console.log(archTodo));
      window.location.reload();
  }

  // Cuando se va a actualizar un todo
  updateTodo( todo: ToDo ) {
    console.log('Vamos a actualizaar')
    const { id, ...updateTodo } = todo;
    this.todoService.updateTodo( id, updateTodo ).subscribe( updTodo => {
      console.log(updTodo);
      window.location.reload();
    })
  }

  // Cuando se presiona el boton de borrar una tarea
  deleteTodo(todo: ToDo) {
    const todoId = todo.id;
    this.todoService.removeTodo( todoId ).subscribe( delTodo =>
      console.log(delTodo));
      window.location.reload();
  }
}
