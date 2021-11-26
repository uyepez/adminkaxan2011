import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { PatrocinadorComponent } from './pages/patrocinador/patrocinador.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { MetaComponent } from './pages/meta/meta.component';
import { BannersComponent } from './pages/banners/banners.component';
import { MarcaComponent } from './pages/marca/marca.component';
import { PromosComponent } from './pages/promos/promos.component';
import { BannerspromoComponent } from './pages/bannerspromo/bannerspromo.component';
import { ListapromosComponent } from './pages/listapromos/listapromos.component';
import { TipoParticipacionComponent } from './pages/tipo-participacion/tipo-participacion.component';
import { EstatusPromocionComponent } from './pages/estatus-promocion/estatus-promocion.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    AngularEditorModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginComponent, RecuperaComponent, RecuperacodigoComponent, RegistroComponent, NuevapromoComponent, CategoriaComponent, PatrocinadorComponent, ClienteComponent, MetaComponent, BannersComponent, MarcaComponent, PromosComponent, BannerspromoComponent, ListapromosComponent, TipoParticipacionComponent, EstatusPromocionComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
