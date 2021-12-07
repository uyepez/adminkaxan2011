import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ClienteService, catalogoTipo } from '../../services/cliente.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [
  ]
})
export class ClienteComponent implements OnInit {

  //Declaramos el FormGroup de registroForm
  registroForm: FormGroup;
  isSubmitReg: Boolean = false;
  errorRegistro = "";
  respuesta: any;
  nuevo: catalogoTipo = <catalogoTipo>{
    tipo: "entidad"
  }

  listaRegistros: any
  listaRegistrosFiltro: any

  constructor(private router: Router, public formBuilder: FormBuilder, private regCatalogo: ClienteService) { 
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern('[a-z A-Z 0-9 ÁÉÍÓÚ áéíóú]*')]],
    });
  }


  get errorControl() {
    return this.registroForm.controls;
  }

  ngOnInit(): void {
    this.listaCatalogo();
  }


  /**************************
 * Guarda
/************************** */

  registroEntidad() {
    this.isSubmitReg = true;
    if (this.registroForm.valid) {
      this.nuevo.nombre = this.registroForm.value.nombre;
      //console.log("nuevo: ", this.nuevo);
      Swal.fire({
        allowOutsideClick: false,
        title: 'Espere por favor...',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
      Swal.showLoading();

      this.regCatalogo.guardaCatalogo(this.nuevo).subscribe(resp => {
        //console.log("resp ", resp);

        this.respuesta = resp;
        Swal.close();
        if (this.respuesta.success == "200") {
          Swal.fire({
            allowOutsideClick: false,
            title: 'Bien Hecho',
            icon: 'success',
            text: `Registro correcto`,
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
              //this.router.navigateByUrl('/cuenta');
              //rellena lista
              this.listaCatalogo();
            }
          });
        } else {

          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: this.respuesta.error_msg,
            confirmButtonText: 'Aceptar'
          });

        }
      })


    }
  } //termina registro


  listaCatalogo() {
    this.regCatalogo.ListaCatalogo().subscribe(resp => {
      let regreso: any = resp;
      this.listaRegistros = regreso.lista;
      this.listaRegistrosFiltro = this.listaRegistros.filter(elemt => elemt.cTipo == "entidad")
      //console.log(this.listaRegistros.lista);
      //console.log(this.listaRegistrosFiltro);

    })
  }


  /************************** 
   * actualiza
  /************************** */
  popActualiza(id: number) {
    //console.log(id);
    Swal.fire({
      title: '¿Estas seguro?',
      icon: 'info',
      input: 'text',
      text: `Nuevo nombre de la entidad`,
      confirmButtonText: 'Aceptar',
      showCancelButton: true,

    }).then((result) => {
      if (result.isConfirmed) {
        this.actualiza(id, result.value);
      }
    });
  }


  actualiza(id: number, nombre: string) {
    this.nuevo.nombre = nombre;
    Swal.fire({
      allowOutsideClick: false,
      title: 'Espere por favor...',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
    Swal.showLoading();
    this.regCatalogo.actualizaCatalogo(id, this.nuevo).subscribe(resp => {
      //console.log("resp ", resp);

      this.respuesta = resp;
      Swal.close();
      if (this.respuesta.success == "200") {
        Swal.fire({
          allowOutsideClick: false,
          title: 'Bien Hecho',
          icon: 'success',
          text: `Registro actualizado correctamente`,
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            //this.router.navigateByUrl('/cuenta');
            //rellena lista
            this.listaCatalogo();
          }
        });
      } else {

        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: this.respuesta.error_msg,
          confirmButtonText: 'Aceptar'
        });

      }
    })
  }



  /**************************
 * elimina
/************************** */
  popElimina(id: number) {
    //console.log(id);
    Swal.fire({
      title: '¿Estas seguro?',
      icon: 'warning',
      text: `Deseas borrar este registro`,
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
      confirmButtonColor: "#ef8157"

    }).then((result) => {
      if (result.isConfirmed) {
        //this.router.navigateByUrl('/cuenta');
        this.elimina(id);

      }
    });
  }


  elimina(id: number) {
    Swal.fire({
      allowOutsideClick: false,
      title: 'Espere por favor...',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
    Swal.showLoading();

    this.regCatalogo.eliminaCatalogo(id).subscribe(resp => {
      //console.log("resp ", resp);

      this.respuesta = resp;
      Swal.close();
      if (this.respuesta.success == "200") {
        Swal.fire({
          allowOutsideClick: false,
          title: 'Bien Hecho',
          icon: 'success',
          text: `Registro eliminado correctamente`,
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            //this.router.navigateByUrl('/cuenta');
            //rellena lista
            this.listaCatalogo();
          }
        });
      } else {

        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: this.respuesta.error_msg,
          confirmButtonText: 'Aceptar'
        });

      }
    })
  }

}
