import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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

  @Input()
  public toDosTitle: string = '';

  public today: Date = new Date();

  ngOnInit(): void {
    this.today = new Date();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if ( changes['todos']) {
      this.todos = changes['todos'].currentValue;
    }
  }

}
