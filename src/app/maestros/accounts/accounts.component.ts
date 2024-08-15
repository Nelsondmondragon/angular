import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ServiceService } from '../../services/service.service';
import { Column, GridOption } from 'angular-slickgrid';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss',
})
export class AccountsComponent implements OnInit {
  constructor(private data: DataService, private service: ServiceService) {}
  userAccount: string = '';
  nomCuen: string = '';
  numCuent: string = '';
  message: string = '';
  CDAccounts: Column[] = [];
  GPAccounts: GridOption = {};
  dsAccounts: any[] = [];

  lAccounts: any[] = [];
  lAccounts2: any[] = [];

  ngOnInit() {}

  saveAccounts() {
    this.data
      .saveAccount(this.service.lstrUser, this.nomCuen, this.numCuent)
      .subscribe({
        next: (res) => {
          if (res[0].Status == 'OK') {
            this.message = 'Registro exitoso';
          } else {
            this.message = res[0].Error;
          }
        },
      });
  }
  fnGetAccounts() {
    this.data.fnGetAccounts(this.service.lstrUser).subscribe({
      next: (res) => {
        this.lAccounts = res;
        this.dsAccounts = res;
      },
    });
  }

  fnGetAccounts2() {
    this.data.fnGetAccounts(this.userAccount).subscribe({
      next: (res) => {
        this.lAccounts2 = res;
        this.dsAccounts = res;
      },
    });
  }

  clearAccounts() {
    this.lAccounts = [];
  }
}
