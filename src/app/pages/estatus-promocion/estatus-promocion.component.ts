import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estatus-promocion',
  templateUrl: './estatus-promocion.component.html',
  styles: [
  ]
})
export class EstatusPromocionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  irInicio(){
    this.router.navigateByUrl('/listapromos')
  }

}
