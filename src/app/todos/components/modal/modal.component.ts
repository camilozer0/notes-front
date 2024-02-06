import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'todos-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Output()
  closeModal = new EventEmitter<void>();

  todoForm = new FormGroup({
    dueDate: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl('')
  })


  onSubmit() {
    console.log(this.todoForm.value)
  }

  close() {
    this.closeModal.emit();
  }
}
