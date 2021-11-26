import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-participacion',
  templateUrl: './tipo-participacion.component.html',
  styles: [
  ]
})
export class TipoParticipacionComponent implements OnInit {

  tiposMecanicas:any = {
    ticket:false,
    fotoTicket:false,
    historia:false,
    trivia:false,
    fotoDiferencias:false,
    fotoCreativa:false
  }
  
  constructor(private router:Router) { }

  imgDiferencias: any

  ngOnInit(): void {
  }



  subioImagenDiferencias(datosImagen: any) {
    this.imgDiferencias = datosImagen;
  }

  eventCheck(event) {
    //console.log(event.target.name)
    switch (event.target.name) {
      case "ticket":
        this.tiposMecanicas.ticket = event.target.checked
        break;
      case "fotoTicket":
        this.tiposMecanicas.fotoTicket = event.target.checked
        break;
      case "historia":
        this.tiposMecanicas.historia = event.target.checked
        break;
      case "trivia":
        this.tiposMecanicas.trivia = event.target.checked
        break;
      case "fotoDiferencias":
        this.tiposMecanicas.fotoDiferencias = event.target.checked
        break;
      case "fotoCreativa":
        this.tiposMecanicas.fotoCreativa = event.target.checked
        break;    
    }

    //console.log(this.tiposMecanicas);
    
}


  irEstatus(){
    this.router.navigateByUrl('/estatusPromocion')
    //estatusPromocion

  }

}
