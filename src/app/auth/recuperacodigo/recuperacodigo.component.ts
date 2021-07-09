import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-recuperacodigo',
  templateUrl: './recuperacodigo.component.html',
  styles: [
  ]
})
export class RecuperacodigoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validaCodigo() {
    Swal.fire({
      allowOutsideClick: false,
      title: '¡Felicidades!',
      text: "Tu contraseña se actualizo correctamente .",
      icon: 'success',
      confirmButtonText: 'Siguiente'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.close();
        this.router.navigateByUrl('/login');
      }
    });
  }


  regresaRecupera() {
    this.router.navigateByUrl('/recupera');
  }

}
