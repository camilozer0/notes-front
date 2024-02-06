import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TodosTableComponent } from '../../components/todos-table/todos-table.component';
import { TodosService } from '../../services/todos.service';
import { ToDo } from '../../interfaces/todo.interface';

@Component({
  selector: 'todos-upcoming',
  standalone: true,
  imports: [
    CommonModule,
    TodosTableComponent
  ],
  template: `
  <div class="bg-softgray m-6 rounded-sm pb-4">
    <component-todos-table [todos]="todosFiltered" [toDosTitle]="title"></component-todos-table>
  </div>
  `,
  styleUrl: './upcoming.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingComponent implements OnInit {

  public todosFiltered: ToDo[] = [];
  public title: string = 'Upcoming...'

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
