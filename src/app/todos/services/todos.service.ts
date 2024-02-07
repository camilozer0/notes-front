import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { ToDo } from '../interfaces/todo.interface';
import { UpdateTodo } from '../interfaces/updateTodo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {


  // TODO: Revisar la direccion
  private apiUrl: string = 'http://localhost:3000/api';
  private headers: HttpHeaders = new HttpHeaders({ 'content-type': 'application/json' })

  constructor(
    private readonly http: HttpClient
  ) { }

  getTodosFiltered( url: string ): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(url)
    .pipe(
      catchError( () => of([]) )
    )
  }

  // Estos metodos son para traer todos filtrados
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

  // Crea una nueva tarea
  addTodo( todo: UpdateTodo ): Observable<ToDo> {
    const url: string = `${this.apiUrl}/todo/`;
    console.log('addTodo listo')
    return this.http.post<ToDo>( url, todo )
  }

  updateTodo( todoId: string, updateTodo: UpdateTodo ): Observable<ToDo> {
    const url: string =`${this.apiUrl}/todo/${ todoId }`;
    return this.http.patch<ToDo>( url, updateTodo, { headers: this.headers } );
  }

  removeTodo( todoId: string ): Observable<ToDo> {
    const url: string = `${this.apiUrl}/todo/${ todoId }`;
    return this.http.delete<ToDo>(url);
  }
}
