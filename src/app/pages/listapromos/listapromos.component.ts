import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listapromos',
  templateUrl: './listapromos.component.html',
  styles: [
  ]
})
export class ListapromosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  irNuevaPromo(){
    this.router.navigateByUrl('/nuevapromo');
  }

}
