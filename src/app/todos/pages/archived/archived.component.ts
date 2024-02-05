import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TodosTableComponent } from '../../components/todos-table/todos-table.component';
import { ToDo } from '../../interfaces/todo.interface';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'todos-archived',
  standalone: true,
  imports: [
    CommonModule,
    TodosTableComponent
  ],
  template: `
  <div class="bg-softgray m-6 rounded-sm
  ">
    <component-todos-table [todos]="todosFiltered" [toDosTitle]="title"></component-todos-table>
  </div>
  `,
  styleUrl: './archived.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchivedComponent implements OnInit {

  public todosFiltered: ToDo[] = [];
  public title: string = 'Archived'

  constructor(
    private readonly todosService: TodosService,
    private readonly changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.upcomingTodos();
  }

  upcomingTodos() {
    this.todosService.searchUpcomingTodos().subscribe( upTodos => {
      this.todosFiltered = [...upTodos];
      this.changeDetection.detectChanges();
      console.log(this.todosFiltered)
      ;
    })
  }

}
