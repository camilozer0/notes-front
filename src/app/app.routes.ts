import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { TodosComponent } from './todos/pages/todos/todos.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent }
];
