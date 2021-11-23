import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { NuevapromoComponent } from '../../pages/nuevapromo/nuevapromo.component';
import { CategoriaComponent } from '../../pages/categoria/categoria.component';
import { ClienteComponent } from '../../pages/cliente/cliente.component';
import { MetaComponent } from '../../pages/meta/meta.component';
import { PatrocinadorComponent } from '../../pages/patrocinador/patrocinador.component';
import { BannersComponent } from '../../pages/banners/banners.component';
import { MarcaComponent } from '../../pages/marca/marca.component';
import { BannerspromoComponent } from '../../pages/bannerspromo/bannerspromo.component';
import { UploadimageComponent } from '../../components/uploadimage/uploadimage.component';
import { ListapromosComponent } from '../../pages/listapromos/listapromos.component';

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "nuevapromo", component: NuevapromoComponent },
  { path: "categoria", component: CategoriaComponent },
  { path: "cliente", component: ClienteComponent },
  { path: "metas", component: MetaComponent },
  { path: "patrocinador", component: PatrocinadorComponent },
  { path: "banners", component: BannersComponent },
  { path: "marca", component: MarcaComponent },
  { path: "bannerspromo", component: BannerspromoComponent },
  { path: "upload", component: UploadimageComponent },
  { path: "listapromos", component: ListapromosComponent },
  // { path: "rtl", component: RtlComponent }
];
