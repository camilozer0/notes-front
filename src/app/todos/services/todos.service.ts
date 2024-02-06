import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
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

  getTodosFiltered( url: string ): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(url)
    .pipe(
      catchError( () => of([]) )
    )
  }

  searchTodayTodos(): Observable<ToDo[]> {
    const url: string = `${this.apiUrl}/todo?todoToday=true`;
    return this.getTodosFiltered( url );
  }

  searchUpcomingTodos(): Observable<ToDo[]> {
    const url: string = `${this.apiUrl}/todo?todoToday=false`;
    return this.getTodosFiltered( url );
  }

  searchActiveTodos(): Observable<ToDo[]> {
    const url: string = `${this.apiUrl}/todo?todoActive=true`;
    return this.getTodosFiltered( url );
  }

  searchArchivedTodos(): Observable<ToDo[]> {
    const url: string = `${this.apiUrl}/todo?todoActive=false`;
    return this.getTodosFiltered( url );
  }

  addTodo( todo: ToDo ): Observable<ToDo> {
    const url: string = `${this.apiUrl}/todo/`;
    return this.http.post<ToDo>(url, todo)
  }

  removeTodo( id: string ): Observable<ToDo> {
    const url: string = `${this.apiUrl}todo/${ id }`;
    return this.http.delete<ToDo>(url);
  }

  updateTodo( todo: ToDo ): Observable<ToDo> {
    const url: string =`${this.apiUrl}/todo/${ todo.id }`;
    return this.http.patch<ToDo>( url, todo )
  }

}
