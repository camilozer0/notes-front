import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodosTableComponent } from '../../components/todos-table/todos-table.component';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'todos-upcoming',
  standalone: true,
  imports: [
    CommonModule,
    TodosTableComponent
  ],
  template: `
  <div class="bg-softgray m-6 rounded-sm
  ">
    <component-todos-table [titleOption]="testTodo"></component-todos-table>
  </div>
  `,
  styleUrl: './upcoming.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingComponent implements OnInit {
  public testTodo = [
    'one',
    'two',
    'three'
  ]
  public titleOp = 'Upcoming...'

  constructor(
    private readonly todosService: TodosService
  ) {}

  ngOnInit(): void {
    this.upcomingTodos();
  }

  upcomingTodos() {
    this.todosService.searchUpcomingTodos().subscribe( upTodos => {
      console.log(upTodos);
    })
  }

}
