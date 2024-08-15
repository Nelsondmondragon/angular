import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Column, GridOption } from 'angular-slickgrid';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent implements OnInit {
  transaccion: {
    tipo: string;
    numeroCuenta?: number; // El signo de interrogación indica que es opcional
    cantidad: number;
    categoria: string;
    descripcion: string;
    estado: string;
  } = {
    tipo: '',
    cantidad: 0,
    categoria: '',
    descripcion: '',
    estado: '',
  };
  lstrMessag: string = '';
  isError: boolean = false;

  CDTrans: Column[] = [];
  GPTrans: GridOption = {};
  dsTransactions: any[] = [];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.GPTrans = {
      autoResize: { container: '#idgridAccounts', rightPadding: 5 },
      enableAutoResize: true,
      gridHeight: 300,
      autoFitColumnsOnFirstLoad: false,
      enableAutoSizeColumns: false,
      autosizeColumnsByCellContentOnFirstLoad: true,
      enableAutoResizeColumnsByCellContent: true,
    };
    this.CDTrans.push({
      id: 'NumeTran',
      name: 'id',
      field: 'id',
      sortable: true,
      filterable: true,
    });
    this.CDTrans.push({
      id: 'Type',
      name: 'Type',
      field: 'Type',
      sortable: true,
      filterable: true,
    });
    this.CDTrans.push({
      id: 'Date',
      name: 'Date',
      field: 'Date',
      sortable: true,
      filterable: true,
    });
    this.CDTrans.push({
      id: 'Amount',
      name: 'Amount',
      field: 'Amount',
      sortable: true,
      filterable: true,
    });
    this.CDTrans.push({
      id: 'Category',
      name: 'Category',
      field: 'Category',
      sortable: true,
      filterable: true,
    });
    this.CDTrans.push({
      id: 'Description',
      name: 'Description',
      field: 'Description',
      sortable: true,
      filterable: true,
    });
    this.CDTrans.push({
      id: 'Status',
      name: 'Status',
      field: 'Status',
      sortable: true,
      filterable: true,
    });
    this.CDTrans.push({
      id: 'Balance',
      name: 'Balance',
      field: 'Balance',
      sortable: true,
      filterable: true,
    });
  }
  onSubmit() {
    if (this.transaccion) {
      this.data
        .saveTrans(
          this.transaccion.tipo,
          this.transaccion.numeroCuenta,
          this.transaccion.cantidad,
          this.transaccion.categoria,
          this.transaccion.descripcion,
          this.transaccion.estado
        )
        .subscribe({
          next: (res) => {
            var row = res[0];
            for (var i in row) {
              if (i == 'Error') {
                this.lstrMessag = res[0].Error;
                this.isError = true;
                return;
              }
            }
            this.dsTransactions = this.getBalance(res);
            this.isError = false;
          },
        });
    }
  }

  getBalance(tran: any[]): any[] {
    var saldo: number = 0;
    for (var i = tran.length - 1; i >= 0; i--) {
      if (tran[i].Type == 'Deposito') {
        saldo += tran[i].Amount;
      } else {
        saldo -= tran[i].Amount;
      }
      tran[i].Balance = saldo;
    }
    return tran;
  }
}
