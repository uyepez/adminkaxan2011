import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AbstractControl,FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { RecuperacodigoService,recuperaCod } from 'src/app/services/recuperacodigo.service';
import Swal from 'sweetalert2';

//import Swal from 'sweetalert2';


@Component({
  selector: 'app-recuperacodigo',
  templateUrl: './recuperacodigo.component.html',
  styles: [
  ]
})
export class RecuperacodigoComponent implements OnInit {


  //Declaramos el FormGroup de loginForm
    condicionpassForm:FormGroup;

    //respuesta
    respuesta: any;


    miUsuario: recuperaCod = <recuperaCod>{
    }
      errorRegistro = "";


  constructor(private router: Router,private recuperaServ: RecuperacodigoService,public formBuilder:FormBuilder) {




    this.condicionpassForm = this.formBuilder.group({

    usuario:['', [Validators.required,  Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
    nuevopass:['', [Validators.required,Validators.minLength(4),Validators.maxLength(100),Validators.pattern('^(?=.*[a-z])(?=.*[$@$#%&-])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9$@$!#%&-\s]+$')]],
    confirmapass:['', [Validators.required,Validators.minLength(4),Validators.maxLength(100),Validators.pattern('^(?=.*[a-z])(?=.*[$@$#%&-])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9$@$!#%&-\s]+$')]],
    codigoreg:['', [Validators.required,Validators.minLength(4),Validators.maxLength(100),Validators.pattern('[0-9]*')]],



    });

  }


  get errorControl(){
    return this.condicionpassForm.controls;
  }



     guardar(){
//console.log('holi');
           if (this.condicionpassForm.valid) {
             Swal.fire({
               allowOutsideClick: false,
               title: 'Espere por favor...',
               icon: 'info',
               confirmButtonText: 'Aceptar'
             });
             Swal.showLoading();

          //   console.log(this.loginServ.login);

   for (const key in this.condicionpassForm.controls) {
   const control = this.condicionpassForm.get(key);
   this.miUsuario[key] = control.value
  }

             this.recuperaServ.login(this.miUsuario).subscribe( resp => {



              //  console.log(this.loginServ.login);
              //  console.log(this.miUsuario.contrasena);
              console.log(resp);

               this.respuesta = resp;
               Swal.close();
               if (this.respuesta.success == "200") {
                // localStorage.setItem('registrado', 'ok');

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


  regresaRecupera() {
    this.router.navigateByUrl('/recupera');
  }

}
