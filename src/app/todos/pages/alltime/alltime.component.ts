import { TodosTableComponent } from './../../components/todos-table/todos-table.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'todos-alltime',
  standalone: true,
  imports: [
    CommonModule,
    TodosTableComponent
  ],
  template: `<component-todos-table></component-todos-table>`,
  styleUrl: './alltime.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlltimeComponent { }
