import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bannerspromo',
  templateUrl: './bannerspromo.component.html',
  styles: [
  ]
})
export class BannerspromoComponent implements OnInit {

imgPremio : any;
imgMecanica : any;
imgCompartir : any;
imgTarjeta : any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("imgPremio", this.imgPremio);
    
  }


  subioImagenPremio( datosImagen:any ){
    this.imgPremio = datosImagen;
  }

  subioImagenMecanica( datosImagen:any ){
    this.imgMecanica = datosImagen;
  }

  subioImagenCompartir( datosImagen:any ){
    this.imgCompartir = datosImagen;
  }

  subioImagenTarjeta( datosImagen:any ){
    this.imgTarjeta = datosImagen;
  }


  irMecanicas(){
    //this.router.navigateByUrl('/mecanicapromo');
    console.log("premio:", this.imgPremio);
    
  }

  

}
