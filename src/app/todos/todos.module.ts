import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './pages/todos/todos.component';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodosComponent,
    AppComponent,
  ]
})
export class TodosModule { }
