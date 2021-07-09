import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LoginComponent } from './auth/login/login.component';
import { RecuperaComponent } from './auth/recupera/recupera.component';
import { RecuperacodigoComponent } from './auth/recuperacodigo/recuperacodigo.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { NuevapromoComponent } from './pages/nuevapromo/nuevapromo.component';

//editor de tetxo
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    AngularEditorModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginComponent, RecuperaComponent, RecuperacodigoComponent, RegistroComponent, NuevapromoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
