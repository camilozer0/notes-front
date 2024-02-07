import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToDo } from '../../interfaces/todo.interface';
import moment from 'moment';

@Component({
  selector: 'todos-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {

  public today: Date = new Date();

// TODO: Habilitar las tags para el todo
  todoForm: FormGroup;

  public title: string = '';

  @Input()
  todo: ToDo = {
    id: '',
    title: '',
    description: '',
    dueDate: '',
    isActive: true,
    tags: []
  };

  @Output()
  closeModal = new EventEmitter<void>();

  @Output()
  editedTodo = new EventEmitter<ToDo>();

  constructor(
    private fb: FormBuilder
  ) {
    this.todoForm = this.fb.group({
      dueDate: [ '', [ Validators.required ] ],
      title: [ '', [ Validators.required, Validators.minLength(5) ] ],
      description: [ '', [ Validators.required, Validators.minLength(5) ]  ]
    });
  }

  ngOnInit(): void {
    this.today = new Date();
    if ( this.todo.id ) {
      const { id, title, description, dueDate, isActive, tags } = this.todo;
      this.todoForm.patchValue({
        dueDate: dueDate,
        title: title,
        description: description
      })
      console.log('hay un todo para editar');
      this.title = 'Update a note';
    } else {
      this.title = 'Create a note'
    }
  }

  onSubmit() {
    const { dueDate, title, description } = this.todoForm.value;
    this.todo.dueDate = moment(dueDate).add(1, 'd').format('YYYY-MM-DD');
    this.todo.title = title,
    this.todo.description = description;
    console.log(this.todo)
    this.editedTodo.emit(this.todo)
  }

  close() {
    this.closeModal.emit();
  }
}
