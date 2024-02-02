import { Component } from '@angular/core';
import { OptionComponent } from "../option/option.component";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    imports: [OptionComponent]
})
export class SidebarComponent {

}
