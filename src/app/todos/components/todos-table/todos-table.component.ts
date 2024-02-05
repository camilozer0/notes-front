import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../../interfaces/todo.interface';

@Component({
  selector: 'component-todos-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './todos-table.component.html',
  styleUrl: './todos-table.component.css'
})
export class TodosTableComponent implements OnInit {

  @Input()
  public todos: ToDo[] = [];

  ngOnInit(): void {
    console.log(this.todos)
  }

}
