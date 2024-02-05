import { Component } from '@angular/core';
import { TodosTableComponent } from '../../components/todos-table/todos-table.component';

@Component({
  selector: 'todos-today',
  standalone: true,
  imports: [
    TodosTableComponent
  ],
  templateUrl: './today.component.html',
  styleUrl: './today.component.css'
})
export class TodayComponent {

}
