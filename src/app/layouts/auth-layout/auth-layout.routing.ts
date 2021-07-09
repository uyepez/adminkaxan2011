import { Routes } from '@angular/router';

import { RecuperaComponent } from '../../auth/recupera/recupera.component';

import { RegistroComponent } from '../../auth/registro/registro.component';
import { LoginComponent } from '../../auth/login/login.component';
import { RecuperacodigoComponent } from 'src/app/auth/recuperacodigo/recuperacodigo.component';


export const AuthLayoutRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'recupera', component: RecuperaComponent },
    { path: 'recuperacodigo', component: RecuperacodigoComponent },
    { path: 'registro', component: RegistroComponent },
];
