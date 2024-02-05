import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  searchUpcomingTodos() {

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
