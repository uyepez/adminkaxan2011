import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/icons",
    title: "Icons",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/user",
    title: "User Profile",
    icon: "icon-single-02",
    class: ""
  },
  /*{
    path: "/tables",
    title: "Table List",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",

    icon: "icon-align-center",
    class: ""
  },*/
  {
    path: "/categoria",
    title: "Categoria",
    icon: "icon-components",
    class: ""
  },
  {
    path: "/cliente",
    title: "Cliente",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/marca",
    title: "Marcas",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/metas",
    title: "Metas",
    icon: "icon-tag",
    class: ""
  },
  {
    path: "/patrocinador",
    title: "Patrocinador",
    icon: "icon-wallet-43",
    class: ""
  },
  {
    path: "/listapromos",
    title: "Nueva",
    icon: "icon-bulb-63",
    class: ""
  },
  {
    path: "/banners",
    title: "Banners",
    icon: "icon-image-02",
    class: ""
  },
  {
    path: "/login",
    title: "LOGIN",
    icon: "icon-lock-circle",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
