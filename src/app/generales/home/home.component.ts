import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  showPipe: boolean = false;
  showDirectiva: boolean = false;
  showPlantilla: boolean = false;

  getPipes() {
    this.showPipe = !this.showPipe;
  }

  getDirectivas() {
    this.showDirectiva = !this.showDirectiva;
  }

  getPlantilla() {
    this.showPlantilla = !this.showPlantilla;
  }
}
