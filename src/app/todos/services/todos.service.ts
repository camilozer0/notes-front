import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {


  // TODO: Revisar la direccion
  private apiUrl: string = 'http://localhost:3000/api'

  constructor(
    private readonly http: HttpClient
  ) { }

  searchTodayTodos() {

  }

  searchUpcomingTodos(): Observable<ToDo> {
    const url: string = `${this.apiUrl}/todo?todoToday=false`;
    return this.http.get<ToDo>(url)
  }

  searchActiveTodos() {

  }

  searchArchivedTodos() {

  }

  addTodo() {

  }

  removeTodo() {

  }

  updateTodo() {

  }

}
