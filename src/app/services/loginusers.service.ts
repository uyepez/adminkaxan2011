import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { UsuarioModel } from 'src/models/usuario.model';

//import { map } from 'rxjs/operators';
//import { ClassGetter } from '@angular/compiler/src/output/output_ast';

export interface loginUsuario {

  usuario: string
  contrasena: string

}



@Injectable({
  providedIn: 'root'
})

//LoginusersService
export class LoginusersService {

  constructor(private http: HttpClient) { }


  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      //'Authorization': 'Basic ' + btoa('admin:admin'),
    }),
  };

  login(milog:loginUsuario) {

    const body = new HttpParams()
      .set('usuario', milog.usuario)
      .set('contrasena', milog.contrasena)
    ;

    return this.http.post(
    //  'https://promodominos.com/Restdmpz21/regusrdmpz21',
    'http://localhost/KAXAN/RESTAPI-KAXAN/login',
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
