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
  CDAccounts: Column[] = [];
  GPAccounts: GridOption = {};
  dsAccounts: any[] = [];

  lAccounts: any[] = [];
  lAccounts2: any[] = [];


  ngOnInit() {
    this.fnGetAccounts();
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
}
