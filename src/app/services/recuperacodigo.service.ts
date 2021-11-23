import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


export interface recuperaCod {

  usuario: string
  nuevopass: string
  confirmapass: string
  codigoreg: string
}

@Injectable({
  providedIn: 'root'
})


export class RecuperacodigoService {


  constructor(private http: HttpClient) { }


  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      //'Authorization': 'Basic ' + btoa('admin:admin'),
    }),
  };

  login(milog:recuperaCod) {

    const body = new HttpParams()
      .set('usuario', milog.usuario)
      .set('nuevopass', milog.nuevopass)
      .set('confirmapass', milog.confirmapass)
      .set('codigoreg', milog.codigoreg)
      ;

    return this.http.post(
    //  'https://promodominos.com/Restdmpz21/regusrdmpz21',
    'http://localhost/KAXAN/RESTAPI-KAXAN/restablecepass',
      body.toString(),
      this.httpOptions
    );
  }



  }
