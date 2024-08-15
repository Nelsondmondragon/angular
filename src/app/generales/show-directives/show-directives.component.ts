import { Component } from '@angular/core';

@Component({
  selector: 'app-show-directives',
  templateUrl: './show-directives.component.html',
  styleUrl: './show-directives.component.scss',
})
export class ShowDirectivesComponent {
  colorBlue: string = '';
  colorGreen: string = '';

  changeBackgroudGreen() {
    this.colorBlue = '';
    this.colorGreen = 'green';
  }

  changeBackgroudBlue() {
    this.colorBlue = 'blue';
    this.colorGreen = '';
  }
}
