import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  apiUrlValiUser: string = `${environment.apiUrl}/valiuser`;
  apiUrlGetAccounts: string = `${environment.apiUrl}/GetAccounts`;
  apiUrlValiProf: string = `${environment.apiUrl}/valiprof`;
  apiUrlSignUp: string = `${environment.apiUrl}/signup`;
  apiUrlSaveAccount: string = `${environment.apiUrl}/SaveAccount`;
  apiUrlSaveTrans: string = `${environment.apiUrl}/SaveTran`;

  fnValiUser(codiUser: string, passUser: string): Observable<any> {
    let UserInfo: any[] = [];
    UserInfo.push({ CodiUser: codiUser, PassUser: passUser });

    return this.http.post(this.apiUrlValiUser, UserInfo, httpOptions).pipe(
      tap((res: any) => {
        return res;
      })
    );
  }

  fnGetAccounts(codiUser: string): Observable<any> {
    let User: any[] = [];
    User.push({ CodiUser: codiUser });

    return this.http.post(this.apiUrlGetAccounts, User, httpOptions).pipe(
      tap((res: any) => {
        return res;
      })
    );
  }

  validProfile(codiUser: string): Observable<any> {
    let User: any[] = [];
    User.push({ CodiUser: codiUser });

    return this.http.post(this.apiUrlValiProf, User, httpOptions).pipe(
      tap((res: any) => {
        return res;
      })
    );
  }

  signup(
    codiUser: string,
    nombreUsu: string,
    passUsu: string
  ): Observable<any> {
    let User: any[] = [];
    User.push({ CodiUser: codiUser, NombUser: nombreUsu, PassUser: passUsu });

    return this.http.post(this.apiUrlSignUp, User, httpOptions).pipe(
      tap((res: any) => {
        return res;
      })
    );
  }

  saveAccount(
    codiUser: string,
    nombCuen: string,
    numCuen: string
  ): Observable<any> {
    let User: any[] = [];
    User.push({ CodiUser: codiUser, NombCuen: nombCuen, NumeCuen: numCuen });
    return this.http.post(this.apiUrlSaveAccount, User, httpOptions).pipe(
      tap((res: any) => {
        return res;
      })
    );
  }
  saveTrans(
    type: string,
    numeCuen: number | undefined,
    amount: number,
    categoria: string,
    descripcion: string,
    estado: string
  ): Observable<any> {
    let User: any[] = [];
    User.push({
      Type: type,
      NumeCuen: numeCuen,
      Amount: amount,
      Categoria: categoria,
      Descripcion: descripcion,
      Estado: estado,
    });
    return this.http.post(this.apiUrlSaveTrans, User, httpOptions).pipe(
      tap((res: any) => {
        return res;
      })
    );
  }
}
