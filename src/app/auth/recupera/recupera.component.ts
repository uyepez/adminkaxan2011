import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-recupera',
  templateUrl: './recupera.component.html',
  styles: [
  ]
})
export class RecuperaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  enviaCodigo() {
    Swal.fire({
      allowOutsideClick: false,
      title: '¡Código enviado!',
      text: "En unos minutos recibiras un mail con un código para restablecer tu contraseña.",
      icon: 'success',
      confirmButtonText: 'Siguiente'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.close();
      }
    });
  }


  codigo() {
    this.router.navigateByUrl('/recuperacodigo');
  }

  regresarLogin() {
    this.router.navigateByUrl('/login');
  }


}