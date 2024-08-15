import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  codigoUsuario: string = '';
  codigoUsuario1: string = '';
  nameUser: string = '';
  passUser: string = '';
  private inputSubject = new Subject<string>();
  constructor(private data: DataService) {}

  ngOnInit() {
    this.observableInput();
  }
  observableInput() {
    this.inputSubject
      .pipe(
        debounceTime(1000), // Espera 1 segundo desde la última tecla presionada
        distinctUntilChanged(), // Solo realiza la petición si el valor ha cambiado
        switchMap((codigoUsuario) => this.data.validProfile(codigoUsuario)) // Realiza la petición HTTP
      )
      .subscribe((response) => {
        console.log('Resultado de la petición:', response);
        this.nameUser = response[0].NombUsua;
        this.passUser = response[0].PassUser;
      });
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputSubject.next(input.value);
  }

  keyInput() {
    this.data.validProfile(this.codigoUsuario1).subscribe((response) => {
      console.log('Resultado de la petición keyInput:', response);
      this.nameUser = response[0].NombUsua;
      this.passUser = response[0].PassUser;
    });
  }
}
