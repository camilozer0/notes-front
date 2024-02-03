import { Component, Input } from '@angular/core';

@Component({
  selector: 'todos-option',
  standalone: true,
  imports: [],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {

  @Input()
  public optionToShow = '';

}
