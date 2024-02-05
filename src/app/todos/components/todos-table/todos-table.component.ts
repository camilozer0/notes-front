import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-todos-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './todos-table.component.html',
  styleUrl: './todos-table.component.css'
})
export class TodosTableComponent {

  @Input()
  public titleOption: string[] = [];

}
