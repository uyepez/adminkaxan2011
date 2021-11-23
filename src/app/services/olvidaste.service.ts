import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


export interface olvidastePass {
usernamerecupera: string
}

@Injectable({
  providedIn: 'root'
})

  //LoginusersService
  export class OlvidasteService {

    constructor(private http: HttpClient) { }


    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        //'Authorization': 'Basic ' + btoa('admin:admin'),
      }),
    };

    login(milog:olvidastePass) {

      const body = new HttpParams()
        .set('usuario', milog.usernamerecupera)

      ;

      return this.http.post(
      //  'https://promodominos.com/Restdmpz21/regusrdmpz21',
      'http://localhost/KAXAN/RESTAPI-KAXAN/recupera',
        body.toString(),
        this.httpOptions
      );
    }
  /*
    numRegistros() {
      const dia = new Date().toISOString().slice(0, 10);
      console.log(dia);


      const body = new HttpParams()
        .set('dia', dia);

      return this.http.post(
        'https://promodominos.com/Restdmpz21/regsXdia',
        body.toString(),
        this.httpOptions
      );
    }
  */


  }
