import { Component } from '@angular/core';
import { OptionComponent } from "../option/option.component";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'todos-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    imports: [OptionComponent, CommonModule]
})
export class SidebarComponent {

  public todosOptions = [
    'today', 'upcoming', 'alltime', 'archived', 'myprofile'
  ]
}
