import { AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './services/data.service';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements DoCheck {
  title = 'Mi aplicación bancaria';

  lbolUserLogu: boolean = false;
  lbolUserLoguTemp: boolean = false;

  lstrUser: string = 'Robin';
  lstrPass: string = '1234';
  lstrMessag: string = '';

  constructor(
    private apiService: DataService,
    public service: ServiceService,
    private router: Router
  ) {}

  ngDoCheck() {
    this.lbolUserLogu = this.lbolUserLoguTemp;
  }

  fnLogIN() {
    this.apiService.fnValiUser(this.lstrUser, this.lstrPass).subscribe({
      next: (res) => {
        if (res[0].Status == 'OK') {
          this.lbolUserLoguTemp = true;
          this.lstrMessag = '';
          this.service.lstrUser = this.lstrUser;
          this.router.navigate(['home']);
        } else {
          this.lbolUserLogu = false;
          this.lstrMessag = res[0].NombUsua;
        }
      },
    });
  }

  fnLogOut() {
    this.lbolUserLoguTemp = false;
  }

  fnSignUp() {
    this.service.lbolSignUp = true;
  }
}
