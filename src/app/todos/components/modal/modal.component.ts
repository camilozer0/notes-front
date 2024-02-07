import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToDo } from '../../interfaces/todo.interface';

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

  @Input()
  title: string = 'Welcome';

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

  constructor(
    private fb: FormBuilder
  ) {
    this.todoForm = this.fb.group({
      dueDate: [ '', [Validators.required] ],
      title: [ '', [Validators.required, Validators.minLength(5)] ],
      description: [ '', [Validators.required, Validators.minLength(5)]  ]
    });
  }

  ngOnInit(): void {
    this.today = new Date();
    if ( this.todo.id !== '') {
      const { id, title, description, dueDate, isActive, tags } = this.todo;
      this.todoForm.patchValue({
        dueDate: dueDate,
        title: title,
        description: description
      })
      console.log('hay un todo para editar')
    }
  }


  onSubmit() {
    console.log(this.todoForm.value);
    this.close();
  }

  close() {
    this.closeModal.emit();
  }
}
