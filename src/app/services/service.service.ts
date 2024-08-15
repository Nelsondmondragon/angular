import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  lbolSignUp: boolean = false;
  lstrUser: string = '';

  private resSubject = new Subject<any>();
  public resObserver$ = this.resSubject.asObservable();

  constructor() {}

  resObserver(event: any) {
    this.resSubject.next(event);
  }
}
