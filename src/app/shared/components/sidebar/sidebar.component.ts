import { Component } from '@angular/core';
import { OptionComponent } from "../option/option.component";

@Component({
    selector: 'shared-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    imports: [OptionComponent]
})
export class SidebarComponent {

}
