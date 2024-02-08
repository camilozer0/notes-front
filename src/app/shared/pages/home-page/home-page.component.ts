import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'shared-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [
      NavbarComponent,
      FooterComponent,
    ]
})
export class HomePageComponent {

}
