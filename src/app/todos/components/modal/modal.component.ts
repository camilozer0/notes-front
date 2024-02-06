import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  @Input()
  title: string = 'Welcome';

  @Output()
  closeModal = new EventEmitter<void>();

  todoForm = new FormGroup({
    dueDate: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl('')
  })

  ngOnInit(): void {
    this.today = new Date();
  }


  onSubmit() {
    console.log(this.todoForm.value)
  }

  close() {
    this.closeModal.emit();
  }
}
