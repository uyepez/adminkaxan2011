import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irHome() {
    this.router.navigateByUrl('/dashboard');
  }


  recupera() {
    this.router.navigateByUrl('/recupera');
  }

}