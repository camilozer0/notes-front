import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodosTableComponent } from '../../components/todos-table/todos-table.component';

@Component({
  selector: 'todos-archived',
  standalone: true,
  imports: [
    CommonModule,
    TodosTableComponent
  ],
  template: `<component-todos-table></component-todos-table>`,
  styleUrl: './archived.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchivedComponent { }
