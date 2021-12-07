import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface catalogoTipo {
  nombre: string
  tipo: string
}


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      //'Authorization': 'Basic ' + btoa('admin:admin'),
    }),
  };

  guardaCatalogo(nuevo: catalogoTipo) {
    const body = new HttpParams()
      .set('nombre', nuevo.nombre)
      .set('tipo', nuevo.tipo);

    return this.http.post(
      'https://myma-demos.com.mx/KAXAN/ejemploCatalogo/catalogo/',
      body.toString(),
      this.httpOptions
    );
  }


  actualizaCatalogo(id: number, nuevo: catalogoTipo) {
    const body = new HttpParams()
      .set('nombre', nuevo.nombre)
      .set('tipo', nuevo.tipo);

    return this.http.put(
      'https://myma-demos.com.mx/KAXAN/ejemploCatalogo/catalogo/' + id,
      body.toString(),
      this.httpOptions
    );
  }
  ListaCatalogo() {
    return this.http.get(
      'https://myma-demos.com.mx/KAXAN/ejemploCatalogo/catalogo/',
      this.httpOptions
    );
  }


  eliminaCatalogo(id: number) {

    const body = new HttpParams()
      .set('id', id.toString());

    return this.http.post(
      'https://myma-demos.com.mx/KAXAN/ejemploCatalogo/elimina/',
      body.toString(),
      this.httpOptions
    );
  }
}

