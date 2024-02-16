import cryptoJs from 'crypto-js';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { ToDo } from '../interfaces/todo.interface';
import { UpdateTodo } from '../interfaces/updateTodo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {


  // TODO: Revisar la direccion
  private apiUrl: string = 'http://localhost:3000/api';
  //private headers: HttpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  private secretKey = "MyNameIsHuman";

  private tokenUser: string = '';

  // headers = new HttpHeaders({
  //   'Authorization': `Bearer' ${ this.tokenUser }`
  // })

  constructor(
    private readonly http: HttpClient,
  ) { }

  getToken() {
    const encryptedToken = JSON.parse(localStorage.getItem( 'token' )!);
    if ( !encryptedToken ) return '';
    const token = cryptoJs.AES.decrypt( encryptedToken, this.secretKey ).toString(cryptoJs.enc.Utf8);
    // TODO: revisar que se hace para cuando no hay token
    console.log({'encryptedTokenfromlocalstorage': encryptedToken})
    console.log({'Tokenfromlocalstorage': token})
    try {
      return token;
    } catch( error ) {
      console.error('Invalid in localStorage');
      localStorage.removeItem( 'token' );
      return '';
    }
  }

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

  // Esta API tiene auth
  addTodo( todo: UpdateTodo ): Observable<ToDo> {
    this.tokenUser = this.getToken();
    console.log(this.tokenUser)
    const url: string = `${this.apiUrl}/todo/`;
    console.log('addTodo listo')
      return this.http.post<ToDo>( url, todo, { headers: { 'Authorization': `Bearer ${ this.tokenUser }`} } ).pipe(
        catchError( () => of() )
      )
  }

  updateTodo( todoId: string, updateTodo: UpdateTodo ): Observable<ToDo> {
    const url: string =`${this.apiUrl}/todo/${ todoId }`;
    return this.http.patch<ToDo>( url, updateTodo );
  }

  // Esta API tiene auth
  removeTodo( todoId: string ): Observable<ToDo> {
    this.tokenUser = this.getToken();
    console.log(this.tokenUser)
    const url: string = `${this.apiUrl}/todo/${ todoId }`;
    return this.http.delete<ToDo>(url, { headers: { 'Authorization': `Bearer ${ this.tokenUser }`} } ).pipe(
      catchError( () => of() ),
    )
  }
}
