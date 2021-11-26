import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginusersService,loginUsuario } from 'src/app/services/loginusers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {


  //Declaramos el FormGroup de loginForm
    loginForm:FormGroup;

    //respuesta
    respuesta: any;
//servicio
    miUsuario: loginUsuario = <loginUsuario>{
    }
      errorRegistro = "";





  constructor(private router: Router, private loginServ: LoginusersService,public formBuilder:FormBuilder) {

    this.loginForm = this.formBuilder.group({

      //username : ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)(\\.[A-Za-z]{2,})$')]],
      usuario:['', [Validators.required,  Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
  //username:['', [Validators.required,Validators.minLength(2),Validators.maxLength(200),Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚÑñ ]*')]],

      contrasena:['', [Validators.required,Validators.minLength(4),Validators.maxLength(100),Validators.pattern('^(?=.*[a-z])(?=.*[$@$#%&-])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9$@$!#%&-\s]+$')]]
    });
  //  console.log(this.miUsuario.contrasena);
   }

   get errorControl(){
     return this.loginForm.controls;
   }

   //funcion submit y mostrmaos data



   login(){
     console.log("hola");
     

         if (this.loginForm.valid) {
           Swal.fire({
             allowOutsideClick: false,
             title: 'Espere por favor...',
             icon: 'info',
             confirmButtonText: 'Aceptar'
           });
           Swal.showLoading();

           console.log(this.loginServ.login);

 for (const key in this.loginForm.controls) {
 const control = this.loginForm.get(key);
 this.miUsuario[key] = control.value
}

           this.loginServ.login(this.miUsuario).subscribe( resp => {



            //  console.log(this.loginServ.login);
            //  console.log(this.miUsuario.contrasena);
            console.log(resp);

             this.respuesta = resp;
             Swal.close();
             if (this.respuesta.success == "200") {

            //guardo en el localstorge id
              localStorage.setItem('id', this.respuesta.id);
             //localStorage.setItem('registrado', 'ok');

               Swal.fire({
                 allowOutsideClick: false,
                 title: 'Bien Hecho',
                 icon: 'success',
                 text: `Registro correcto`,
                 confirmButtonText: 'Aceptar'
               }).then((result) => {
                 if (result.isConfirmed) {
                   this.router.navigateByUrl('/gracias');
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





  ngOnInit(): void {

  }


    recupera() {
      this.router.navigateByUrl('/recupera');
    }



}
