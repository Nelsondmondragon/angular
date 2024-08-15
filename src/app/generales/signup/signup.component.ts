import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { DataService } from '../../services/data.service';
import { debounceTime, switchMap, Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  codigoUsuario: string = '';
  nameUser: string = '';
  passUser: string = '';
  message: string = '';
  displayDialog: boolean = false;

  public suscription: Subscription = new Subscription();

  constructor(public service: ServiceService, private data: DataService) {}

  ngOnInit() {
    this.observableInput();
  }

  fnCancel() {
    this.service.lbolSignUp = false;
  }

  observableInput() {
    this.suscription = this.service.resObserver$
      .pipe(
        debounceTime(1000),
        switchMap(() =>
          this.data.signup(this.codigoUsuario, this.nameUser, this.passUser)
        ) // Realiza la petición HTTP
      )
      .subscribe({
        next: (res) => {
          this.suscription.unsubscribe();
          if (res[0].Status == 'OK') {
            this.message = 'Registro exitoso';
          } else {
            this.message = res[0].Error;
          }
        },
      });
  }

  onInputChange() {
    this.service.resObserver('');
  }

  // restSave() {
  //   this.data
  //     .signup(this.codigoUsuario, this.nameUser, this.passUser)
  //     .subscribe({
  //       next: (res) => {
  //         if (res[0].Status == 'OK') {
  //           this.message = 'Registro exitoso';
  //         } else {
  //           this.message = res[0].Error;
  //         }
  //       },
  //     });
  // }

  showDialog() {
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }
}
