import { TodosTableComponent } from './../../components/todos-table/todos-table.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToDo } from '../../interfaces/todo.interface';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'todos-alltime',
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
  styleUrl: './alltime.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlltimeComponent implements OnInit {

  public todosFiltered: ToDo[] = [];
  public title: string = 'All time'

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
