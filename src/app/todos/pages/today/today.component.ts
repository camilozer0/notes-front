import { Component, OnInit } from '@angular/core';
import { TodosTableComponent } from '../../components/todos-table/todos-table.component';
import { ToDo } from '../../interfaces/todo.interface';
import { TodosService } from '../../services/todos.service';
import { ModalContainerComponent } from '../../components/modalContainer/modalContainer.component';

@Component({
  selector: 'todos-today',
  standalone: true,
  imports: [
    TodosTableComponent,
    ModalContainerComponent
  ],
  templateUrl: './today.component.html',
  styleUrl: './today.component.css'
})
export class TodayComponent implements OnInit {

  public todosFiltered: ToDo[] = [];
  public title: string = 'Today';

  constructor(
    private readonly todosService: TodosService
  ) {}

  ngOnInit(): void {
    this.upcomingTodos();
  }

  upcomingTodos() {
    this.todosService.searchTodayTodos().subscribe( upTodos => {
      this.todosFiltered = upTodos;
      console.log(this.todosFiltered)
      ;
    })
  }
}
