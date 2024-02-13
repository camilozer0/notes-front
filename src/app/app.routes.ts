import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { TodosComponent } from './todos/pages/todos/todos.component';
import { TodayComponent } from './todos/pages/today/today.component';
import { UpcomingComponent } from './todos/pages/upcoming/upcoming.component';
import { AlltimeComponent } from './todos/pages/alltime/alltime.component';
import { ArchivedComponent } from './todos/pages/archived/archived.component';
import { UserComponent } from './user/pages/user/user.component';
import { SignupComponent } from './user/components/signup/signup.component';
import { LoginComponent } from './user/components/login/login.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent, children: [
    { path: 'today', component: TodayComponent },
    { path: 'upcoming', component: UpcomingComponent },
    { path: 'alltime', component: AlltimeComponent },
    { path: 'archived', component: ArchivedComponent },
  ]},
  { path: 'user', component: UserComponent, children: [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent }
  ]}
]
