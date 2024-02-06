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

  searchTodayTodos(): Observable<ToDo[]> {
    const url: string = `${this.apiUrl}/todo?todoToday=true`;
    return this.http.get<ToDo[]>(url)
  }

  searchUpcomingTodos(): Observable<ToDo[]> {
    const url: string = `${this.apiUrl}/todo?todoToday=false`;
    return this.http.get<ToDo[]>(url)
  }

  searchActiveTodos(): Observable<ToDo[]> {
    const url: string = `${this.apiUrl}/todo?todoActive=true`;
    return this.http.get<ToDo[]>(url)
  }

  searchArchivedTodos(): Observable<ToDo[]> {
    const url: string = `${this.apiUrl}/todo?todoActive=false`;
    return this.http.get<ToDo[]>(url)
  }

  addTodo() {

  }

  removeTodo( id: string ): Observable<ToDo> {
    const url: string = `${this.apiUrl}todo/${ id }`;
    return this.http.delete<ToDo>(url);
  }

  updateTodo() {

  }

}
