import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-showpipes',
  templateUrl: './showpipes.component.html',
  styleUrl: './showpipes.component.scss',
})
export class ShowpipesComponent implements OnInit {
  pipeDate?: Date = undefined;
  amount: number = 20334234;
  decimal: number = 3.14159;
  percent: number = 0.14159;

  constructor(private data: DataService, private service: ServiceService) {}

  lAccounts: any[] = [];
  numAccount: string = '';
  ngOnInit() {
    // this.fnGetAccounts();
    this.pipeDate = new Date();
    this.getAccounts();
  }

  getAccounts() {
    this.data.fnGetAccounts(this.service.lstrUser).subscribe({
      next: (res) => {
        this.lAccounts = res;
      },
    });
  }
}
