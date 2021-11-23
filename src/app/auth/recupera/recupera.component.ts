import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OlvidasteService,olvidastePass } from 'src/app/services/olvidaste.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recupera',
  templateUrl: './recupera.component.html',
  styles: [
  ]
})
export class RecuperaComponent implements OnInit {

  //Declaramos el FormGroup de loginForm
    recuperaForm:FormGroup;


    //respuesta
    respuesta: any;


    miUsuario: olvidastePass = <olvidastePass>{
    }
      errorRegistro = "";



//Declaramos que recuperForm es un formbuiler
  constructor(private router: Router,private olvidastePas: OlvidasteService,public formBuilder:FormBuilder) {

    this.recuperaForm = this.formBuilder.group({

      usernamerecupera:['', [Validators.required,  Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]]

    });

  }

  get errorControl(){
    return this.recuperaForm.controls;
  }



     recupera(){

           if (this.recuperaForm.valid) {
             Swal.fire({
               allowOutsideClick: false,
               title: 'Espere por favor...',
               icon: 'info',
               confirmButtonText: 'Aceptar'
             });
             Swal.showLoading();

          //   console.log(this.loginServ.login);

   for (const key in this.recuperaForm.controls) {
   const control = this.recuperaForm.get(key);
   this.miUsuario[key] = control.value
  }

             this.olvidastePas.login(this.miUsuario).subscribe( resp => {



              //  console.log(this.loginServ.login);
              //  console.log(this.miUsuario.contrasena);
              console.log(resp);

               this.respuesta = resp;
               Swal.close();
               if (this.respuesta.success == "200") {
                // localStorage.setItem('registrado', 'ok');

                Swal.fire({
                  allowOutsideClick: false,
                  title: '¡Código enviado!',
                  text: "En unos minutos recibiras un email con un código para restablecer tu contraseña.",
                  icon: 'success',
                  confirmButtonText: 'Siguiente'
                }).then((result) => {
                  if (result.isConfirmed) {

                      this.router.navigateByUrl('/recuperacodigo');

                  }
                });

               }else{
                 this.errorRegistro = this.respuesta.error_msg;

                 Swal.fire({
                   title: 'Error',
                   icon: 'error',
                   text: this.respuesta.error_msg,
                   confirmButtonText: 'Aceptar'
                 });

               }

             });

           }
     }






  //funcion submit y mostrmaos data

  reupera(){
    if(this.recuperaForm.valid){





    }
  }



  ngOnInit(): void {
  }




  codigo() {
    this.router.navigateByUrl('/recuperacodigo');
  }

  regresarLogin() {
    this.router.navigateByUrl('/login');
  }


}
