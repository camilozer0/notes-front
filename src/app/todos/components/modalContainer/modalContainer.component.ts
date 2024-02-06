import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'todos-modal-container',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent
  ],
  template: `
  <button type="button" class="text-softwhite border border-mediumgray hover:bg-darkgray focus:ring-4 focus:ring-mediumgray rounded-md font-medium text-sm px-5 py-2.5 mb-2" (click)="toggleModal()">
    Open Modal
  </button>
  <todos-modal *ngIf="showModal" (closeModal)="toggleModal()"></todos-modal>
  `,
  styleUrl: './modalContainer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalContainerComponent {

  showModal = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

}
