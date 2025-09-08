import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-223IUSYC.js";
import {
  MatButtonModule
} from "./chunk-7M5C6ZGC.js";
import {
  AuthService
} from "./chunk-PZUSUSHQ.js";
import {
  HomeComponent,
  SearchBarComponent,
  StickySearchService
} from "./chunk-DFDXVFE4.js";
import {
  RestauranteService
} from "./chunk-2QDEYY6F.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-WG6I7YZH.js";
import {
  FormControl
} from "./chunk-X4ULZSL7.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-5CK7YN5Y.js";
import {
  CommonModule,
  NgIf
} from "./chunk-IOJADCVY.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-ZE3YZEND.js";
import {
  Component,
  inject,
  map,
  of,
  setClassMetadata,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CO622P43.js";

// src/app/pages/layout-principal/layout-principal.component.ts
function LayoutPrincipalComponent_app_search_bar_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-search-bar", 25);
    \u0275\u0275listener("search", function LayoutPrincipalComponent_app_search_bar_5_Template_app_search_bar_search_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearchSticky());
    })("cityInput", function LayoutPrincipalComponent_app_search_bar_5_Template_app_search_bar_cityInput_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCityInputSticky($event));
    })("selectCity", function LayoutPrincipalComponent_app_search_bar_5_Template_app_search_bar_selectCity_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCitySticky($event));
    })("selectQuery", function LayoutPrincipalComponent_app_search_bar_5_Template_app_search_bar_selectQuery_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectQuerySticky($event));
    })("cityBlur", function LayoutPrincipalComponent_app_search_bar_5_Template_app_search_bar_cityBlur_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCityBlurSticky($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("@searchBarAnim", void 0)("citySuggestions", ctx_r2.citySuggestions)("querySuggestions", ctx_r2.querySuggestions)("showCityDropdown", ctx_r2.showCityDropdown)("showQueryDropdown", ctx_r2.showQueryDropdown)("cityCtrl", ctx_r2.cityCtrl)("queryCtrl", ctx_r2.queryCtrl);
  }
}
function LayoutPrincipalComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 26)(2, "mat-icon");
    \u0275\u0275text(3, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "In\xEDcio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 27)(7, "mat-icon");
    \u0275\u0275text(8, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Hist\xF3rico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function LayoutPrincipalComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 28)(2, "mat-icon");
    \u0275\u0275text(3, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Reservas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 29)(7, "mat-icon");
    \u0275\u0275text(8, "restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Meu Restaurante");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 30)(12, "mat-icon");
    \u0275\u0275text(13, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Card\xE1pio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
var LayoutPrincipalComponent = class _LayoutPrincipalComponent {
  constructor() {
    this.sidebarAberta = true;
    this.showStickySearchBar = false;
    this.cidade = "";
    this.query = "";
    this.citySuggestions = [];
    this.querySuggestions = [];
    this.showCityDropdown = false;
    this.showQueryDropdown = false;
    this.cityCtrl = new FormControl("");
    this.queryCtrl = new FormControl("");
    this.filteredCities$ = of([]);
    this.filteredQueries$ = of([]);
    this.currentHomeComponent = null;
    this.router = inject(Router);
    this.auth = inject(AuthService);
    this.stickyService = inject(StickySearchService);
    this.restauranteService = inject(RestauranteService);
    this.stickyService.sticky$.subscribe((val) => {
      const isHome = this.router.url.startsWith("/home");
      this.showStickySearchBar = val && isHome;
      if (this.showStickySearchBar && this.currentHomeComponent) {
        this.cityCtrl.setValue(this.currentHomeComponent.cityCtrl.value, { emitEvent: false });
        this.queryCtrl.setValue(this.currentHomeComponent.queryCtrl.value, { emitEvent: false });
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const isHome = this.router.url.startsWith("/home");
        if (!isHome) {
          this.showStickySearchBar = false;
          this.currentHomeComponent = null;
        }
      }
    });
    this.filteredCities$ = this.cityCtrl.valueChanges.pipe(startWith(this.cityCtrl.value ?? ""), map((val) => this._filter(val ?? "", this.citySuggestions)));
    this.filteredQueries$ = this.queryCtrl.valueChanges.pipe(startWith(""), map((val) => this._filter(val ?? "", this.querySuggestions)));
    this.restauranteService.allCities$.subscribe((cities) => {
      this.citySuggestions = cities;
    });
    this.restauranteService.allCuisines$.subscribe((cuisines) => {
      this.querySuggestions = cuisines;
    });
  }
  ngOnInit() {
    this.stickyService.setSidebarAberta(this.sidebarAberta);
  }
  get userName() {
    return this.auth.perfil?.nome || "Usu\xE1rio";
  }
  get userType() {
    return this.auth.perfil?.tipo === "RESTAURANTE" ? "Restaurante" : "Cliente";
  }
  get userAvatar() {
    const profileImage = this.auth.perfil?.imagem;
    if (profileImage) {
      return this.auth.getAbsoluteImageUrl(profileImage);
    }
    if (this.auth.perfil?.tipo === "RESTAURANTE") {
      return "assets/png/avatar-padrao-restaurante-tavola.png";
    }
    return "assets/png/avatar-padrao-tavola-cordeirinho.png";
  }
  get isCliente() {
    return this.auth.hasRole("CLIENTE");
  }
  get isRestaurante() {
    return this.auth.hasRole("RESTAURANTE");
  }
  handleSidebarClick(event) {
    if (event.target.closest("button")) {
      return;
    }
    if (!this.sidebarAberta) {
      this.sidebarAberta = true;
      this.stickyService.setSidebarAberta(true);
    }
  }
  toggleSidebar() {
    this.sidebarAberta = !this.sidebarAberta;
    this.stickyService.setSidebarAberta(this.sidebarAberta);
  }
  logout() {
    this.auth.clearAuthData();
    this.router.navigate(["/login"]);
  }
  // --- Métodos para a SearchBarComponent (na toolbar sticky) ---
  onSearchSticky() {
    console.log("Sticky Search - In\xEDcio");
    console.log("Sticky Search - Buscar:", this.cityCtrl.value, this.queryCtrl.value);
    const currentUrl = this.router.url;
    const isCurrentlyOnHomePage = this.currentHomeComponent !== null;
    console.log("Sticky Search - Rota atual:", currentUrl, "Est\xE1 na Home (componente ativo):", isCurrentlyOnHomePage);
    console.log("Sticky Search - currentHomeComponent (antes da busca):", this.currentHomeComponent);
    if (!isCurrentlyOnHomePage) {
      console.log("Sticky Search - N\xE3o est\xE1 na Home (componente ativo). Navegando para /home...");
      this.router.navigate(["/home"]).then(() => {
        setTimeout(() => {
          if (this.currentHomeComponent) {
            console.log("Sticky Search - HomeComponent ativo ap\xF3s navega\xE7\xE3o. Sincronizando e buscando...");
            this.currentHomeComponent.cityCtrl.setValue(this.cityCtrl.value, { emitEvent: false });
            this.currentHomeComponent.queryCtrl.setValue(this.queryCtrl.value, { emitEvent: false });
            this.currentHomeComponent.onSearch();
            console.log("Sticky Search - onSearch do HomeComponent acionado.");
          } else {
            console.error("Sticky Search - HomeComponent ainda n\xE3o dispon\xEDvel ap\xF3s navega\xE7\xE3o. Tentar novamente ou avisar usu\xE1rio.");
          }
        }, 200);
      });
    } else {
      console.log("Sticky Search - J\xE1 na rota /home e componente ativo. Sincronizando e buscando diretamente.");
      this.currentHomeComponent.cityCtrl.setValue(this.cityCtrl.value, { emitEvent: false });
      this.currentHomeComponent.queryCtrl.setValue(this.queryCtrl.value, { emitEvent: false });
      this.currentHomeComponent.onSearch();
      console.log("Sticky Search - onSearch do HomeComponent acionado diretamente.");
    }
  }
  onCityInputSticky(event) {
    if (this.currentHomeComponent) {
      const value = event.target.value;
      this.citySuggestions = this._filter(value, this.citySuggestions);
      this.filteredCities$ = of(this.citySuggestions);
      this.currentHomeComponent.cityCtrl.setValue(value, { emitEvent: false });
    }
  }
  selectCitySticky(city) {
    this.cityCtrl.setValue(city);
    if (this.currentHomeComponent) {
      this.currentHomeComponent.selectCity(city);
    }
  }
  selectQuerySticky(query) {
    this.queryCtrl.setValue(query);
    if (this.currentHomeComponent) {
      this.currentHomeComponent.selectQuery(query);
    }
  }
  onCityBlurSticky(event) {
  }
  // --- Fim dos métodos da SearchBarComponent (na toolbar sticky) ---
  get stickySearchBarClass() {
    return {
      "toolbar-search-bar": true,
      "sidebar-fechada": !this.sidebarAberta
    };
  }
  _filter(val, list) {
    const filter = val.toLowerCase();
    return list.filter((item) => item.toLowerCase().includes(filter));
  }
  // Método para lidar com componentes de rota ativados
  onOutletActivate(component) {
    console.log("onOutletActivate - Componente ativado:", component);
    if (component instanceof HomeComponent) {
      console.log("onOutletActivate - Componente \xE9 HomeComponent.");
      this.currentHomeComponent = component;
      console.log("onOutletActivate - currentHomeComponent definido:", this.currentHomeComponent);
      this.currentHomeComponent.cityCtrl.valueChanges.subscribe((city) => {
        if (this.showStickySearchBar) {
          this.cityCtrl.setValue(city || "", { emitEvent: false });
          console.log("onOutletActivate - cityCtrl da Sticky Search atualizado:", city);
        }
      });
      this.currentHomeComponent.queryCtrl.valueChanges.subscribe((query) => {
        if (this.showStickySearchBar) {
          this.queryCtrl.setValue(query || "", { emitEvent: false });
          console.log("onOutletActivate - queryCtrl da Sticky Search atualizado:", query);
        }
      });
      this.citySuggestions = this.currentHomeComponent.todasCidades;
      this.querySuggestions = this.currentHomeComponent.todasCozinhas;
      console.log("onOutletActivate - Sugest\xF5es de cidades e cozinhas sincronizadas.");
    } else {
      this.currentHomeComponent = null;
      console.log("onOutletActivate - Componente N\xC3O \xE9 HomeComponent. currentHomeComponent nulo.");
    }
  }
  static {
    this.\u0275fac = function LayoutPrincipalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LayoutPrincipalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutPrincipalComponent, selectors: [["app-layout-principal"]], decls: 44, vars: 9, consts: [["menu", "matMenu"], [1, "layout-container"], [1, "toolbar"], [1, "menu-toggle", 3, "click"], ["class", "toolbar-search-bar", 3, "citySuggestions", "querySuggestions", "showCityDropdown", "showQueryDropdown", "cityCtrl", "queryCtrl", "search", "cityInput", "selectCity", "selectQuery", "cityBlur", 4, "ngIf"], [1, "user-menu", 3, "matMenuTriggerFor"], [1, "user-info"], [1, "avatar"], ["alt", "Avatar do usu\xE1rio", 3, "src"], [1, "user-details"], [1, "user-name"], [1, "user-type"], [1, "user-dropdown"], ["mat-menu-item", "", "routerLink", "/configuracoes"], ["mat-menu-item", "", 3, "click"], [1, "main-wrapper"], [1, "sidebar", 3, "click"], [1, "sidebar-header"], ["src", "assets/png/LogoTavolaSimples.png", "alt", "Logo Tavola", 1, "logo"], [1, "menu"], [4, "ngIf"], ["routerLink", "/configuracoes", "routerLinkActive", "active"], [1, "content"], [1, "router-container"], [3, "activate"], [1, "toolbar-search-bar", 3, "search", "cityInput", "selectCity", "selectQuery", "cityBlur", "citySuggestions", "querySuggestions", "showCityDropdown", "showQueryDropdown", "cityCtrl", "queryCtrl"], ["routerLink", "/home", "routerLinkActive", "active"], ["routerLink", "/historico", "routerLinkActive", "active"], ["routerLink", "/reserva", "routerLinkActive", "active"], ["routerLink", "/meu-restaurante", "routerLinkActive", "active"], ["routerLink", "/cadastro-cardapio", "routerLinkActive", "active"]], template: function LayoutPrincipalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
        \u0275\u0275listener("click", function LayoutPrincipalComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleSidebar());
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "menu");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(5, LayoutPrincipalComponent_app_search_bar_5_Template, 1, 7, "app-search-bar", 4);
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        \u0275\u0275element(9, "img", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9)(11, "span", 10);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 11);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "mat-icon");
        \u0275\u0275text(16, "keyboard_arrow_down");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "mat-menu", 12, 0)(19, "button", 13)(20, "mat-icon");
        \u0275\u0275text(21, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span");
        \u0275\u0275text(23, "Configura\xE7\xF5es");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "button", 14);
        \u0275\u0275listener("click", function LayoutPrincipalComponent_Template_button_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.logout());
        });
        \u0275\u0275elementStart(25, "mat-icon");
        \u0275\u0275text(26, "logout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span");
        \u0275\u0275text(28, "Sair");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(29, "div", 15)(30, "div", 16);
        \u0275\u0275listener("click", function LayoutPrincipalComponent_Template_div_click_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleSidebarClick($event));
        });
        \u0275\u0275elementStart(31, "div", 17);
        \u0275\u0275element(32, "img", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 19);
        \u0275\u0275template(34, LayoutPrincipalComponent_ng_container_34_Template, 11, 0, "ng-container", 20)(35, LayoutPrincipalComponent_ng_container_35_Template, 16, 0, "ng-container", 20);
        \u0275\u0275elementStart(36, "button", 21)(37, "mat-icon");
        \u0275\u0275text(38, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span");
        \u0275\u0275text(40, "Configura\xE7\xF5es");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(41, "div", 22)(42, "div", 23)(43, "router-outlet", 24);
        \u0275\u0275listener("activate", function LayoutPrincipalComponent_Template_router_outlet_activate_43_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOutletActivate($event));
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const menu_r4 = \u0275\u0275reference(18);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.showStickySearchBar);
        \u0275\u0275advance();
        \u0275\u0275property("matMenuTriggerFor", menu_r4);
        \u0275\u0275advance(3);
        \u0275\u0275property("src", ctx.userAvatar, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.userName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.userType);
        \u0275\u0275advance(16);
        \u0275\u0275classProp("fechada", !ctx.sidebarAberta);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.isCliente);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isRestaurante);
      }
    }, dependencies: [RouterOutlet, RouterModule, RouterLink, RouterLinkActive, MatIconModule, MatIcon, MatButtonModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, CommonModule, NgIf, SearchBarComponent], styles: ["\n\n.layout-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n  height: 60px;\n  background-color: #c22523;\n  color: white;\n  z-index: 10;\n}\n.toolbar[_ngcontent-%COMP%]   .menu-toggle[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: white;\n  cursor: pointer;\n}\n.toolbar[_ngcontent-%COMP%]   .menu-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.toolbar[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n}\n.toolbar[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.toolbar[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.toolbar[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid #F6BD38;\n}\n.toolbar[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.toolbar[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.toolbar[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: white;\n}\n.toolbar[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-type[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.toolbar[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.main-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  overflow: hidden;\n  background-color: #ebe8e2;\n}\n.sidebar[_ngcontent-%COMP%] {\n  margin: 16px;\n  width: 240px;\n  background-color: #3B221B;\n  color: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.sidebar.fechada[_ngcontent-%COMP%] {\n  width: 70px;\n  padding: 16px 8px;\n}\n.sidebar.fechada[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.sidebar.fechada[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 30px;\n}\n.sidebar.fechada[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.sidebar.fechada[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 50px;\n  height: auto;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: transparent;\n  border: 1px solid #F6BD38;\n  color: #F6BD38;\n  padding: 12px 16px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 500;\n  width: 100%;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background-color: #F6BD38;\n  color: #3B221B;\n  border: 1px solid #F6BD38;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.content[_ngcontent-%COMP%]   .router-container[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n  background-color: #ebe8e2;\n  overflow-y: auto;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-size: 24px;\n}\n  .user-dropdown {\n  margin-top: 8px;\n}\n  .user-dropdown .mat-mdc-menu-content {\n  padding: 0;\n}\n  .user-dropdown .mat-mdc-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n}\n  .user-dropdown .mat-mdc-menu-item mat-icon {\n  margin: 0;\n}\n.toolbar-search-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 700px;\n  margin: 0 32px;\n  align-self: center;\n  z-index: 20;\n  transition:\n    margin-left 0.3s,\n    box-shadow 0.3s,\n    transform 0.3s;\n}\n.sidebar-fechada[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\n@media (min-width: 900px) {\n  .toolbar-search-bar[_ngcontent-%COMP%] {\n    margin-left: 80px;\n  }\n  .sidebar-fechada.toolbar-search-bar[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n.toolbar-search-bar[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 0.3s, transform 0.3s;\n}\n[_nghost-%COMP%]     .toolbar-search-bar.ng-animating {\n  opacity: 0;\n  transform: translateY(-30px);\n}\n@media (max-width: 900px) {\n  .toolbar-search-bar[_ngcontent-%COMP%] {\n    max-width: 98vw;\n    margin: 0 8px;\n  }\n}\n.toolbar-search-bar[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], \n.toolbar-search-bar[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], \n.toolbar-search-bar[_ngcontent-%COMP%]   .brown[_ngcontent-%COMP%] {\n  color: #3B221B !important;\n}\n/*# sourceMappingURL=layout-principal.component.css.map */"], data: { animation: [
      trigger("searchBarAnim", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateY(-30px)" }),
          animate("300ms", style({ opacity: 1, transform: "translateY(0)" }))
        ]),
        transition(":leave", [
          animate("300ms", style({ opacity: 0, transform: "translateY(-30px)" }))
        ])
      ])
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutPrincipalComponent, [{
    type: Component,
    args: [{ selector: "app-layout-principal", standalone: true, imports: [RouterOutlet, RouterModule, MatIconModule, MatButtonModule, MatMenuModule, CommonModule, SearchBarComponent], animations: [
      trigger("searchBarAnim", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateY(-30px)" }),
          animate("300ms", style({ opacity: 1, transform: "translateY(0)" }))
        ]),
        transition(":leave", [
          animate("300ms", style({ opacity: 0, transform: "translateY(-30px)" }))
        ])
      ])
    ], template: '<div class="layout-container">\r\n  <div class="toolbar">\r\n    <button class="menu-toggle" (click)="toggleSidebar()">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    \r\n    <app-search-bar\r\n      *ngIf="showStickySearchBar"\r\n      [@searchBarAnim]\r\n      [citySuggestions]="citySuggestions"\r\n      [querySuggestions]="querySuggestions"\r\n      [showCityDropdown]="showCityDropdown"\r\n      [showQueryDropdown]="showQueryDropdown"\r\n      [cityCtrl]="cityCtrl"\r\n      [queryCtrl]="queryCtrl"\r\n      (search)="onSearchSticky()"\r\n      (cityInput)="onCityInputSticky($event)"\r\n      (selectCity)="selectCitySticky($event)"\r\n      (selectQuery)="selectQuerySticky($event)"\r\n      (cityBlur)="onCityBlurSticky($event)"\r\n      class="toolbar-search-bar"\r\n    ></app-search-bar>\r\n\r\n    <div class="user-menu" [matMenuTriggerFor]="menu">\r\n      <div class="user-info">\r\n        <div class="avatar">\r\n          <img [src]="userAvatar" alt="Avatar do usu\xE1rio">\r\n        </div>\r\n        <div class="user-details">\r\n          <span class="user-name">{{ userName }}</span>\r\n          <span class="user-type">{{ userType }}</span>\r\n        </div>\r\n      </div>\r\n      <mat-icon>keyboard_arrow_down</mat-icon>\r\n    </div>\r\n\r\n    <mat-menu #menu="matMenu" class="user-dropdown">\r\n      <button mat-menu-item routerLink="/configuracoes">\r\n        <mat-icon>settings</mat-icon>\r\n        <span>Configura\xE7\xF5es</span>\r\n      </button>\r\n      <button mat-menu-item (click)="logout()">\r\n        <mat-icon>logout</mat-icon>\r\n        <span>Sair</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n\r\n  <div class="main-wrapper">\r\n    <div class="sidebar" [class.fechada]="!sidebarAberta" (click)="handleSidebarClick($event)">\r\n      <div class="sidebar-header">\r\n        <img src="assets/png/LogoTavolaSimples.png" alt="Logo Tavola" class="logo" />\r\n      </div>\r\n\r\n      <div class="menu">\r\n        <ng-container *ngIf="isCliente">\r\n          <button routerLink="/home" routerLinkActive="active">\r\n            <mat-icon>home</mat-icon>\r\n            <span>In\xEDcio</span>\r\n          </button>\r\n          <button routerLink="/historico" routerLinkActive="active">\r\n            <mat-icon>history</mat-icon>\r\n            <span>Hist\xF3rico</span>\r\n          </button>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf="isRestaurante">\r\n          <button routerLink="/reserva" routerLinkActive="active">\r\n            <mat-icon>event</mat-icon>\r\n            <span>Reservas</span>\r\n          </button>\r\n          <button routerLink="/meu-restaurante" routerLinkActive="active">\r\n            <mat-icon>restaurant</mat-icon>\r\n            <span>Meu Restaurante</span>\r\n          </button>\r\n          <button routerLink="/cadastro-cardapio" routerLinkActive="active">\r\n            <mat-icon>menu_book</mat-icon>\r\n            <span>Card\xE1pio</span>\r\n          </button>\r\n        </ng-container>\r\n\r\n        <button routerLink="/configuracoes" routerLinkActive="active">\r\n          <mat-icon>settings</mat-icon>\r\n          <span>Configura\xE7\xF5es</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="content">\r\n      <div class="router-container">\r\n        <router-outlet (activate)="onOutletActivate($event)"></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>', styles: ["/* src/app/pages/layout-principal/layout-principal.component.scss */\n.layout-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n  height: 60px;\n  background-color: #c22523;\n  color: white;\n  z-index: 10;\n}\n.toolbar .menu-toggle {\n  background: transparent;\n  border: none;\n  color: white;\n  cursor: pointer;\n}\n.toolbar .menu-toggle mat-icon {\n  font-size: 24px;\n}\n.toolbar .user-menu {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n}\n.toolbar .user-menu:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.toolbar .user-menu .user-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.toolbar .user-menu .user-info .avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid #F6BD38;\n}\n.toolbar .user-menu .user-info .avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.toolbar .user-menu .user-info .user-details {\n  display: flex;\n  flex-direction: column;\n}\n.toolbar .user-menu .user-info .user-details .user-name {\n  font-size: 14px;\n  font-weight: 500;\n  color: white;\n}\n.toolbar .user-menu .user-info .user-details .user-type {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.toolbar .user-menu mat-icon {\n  color: rgba(255, 255, 255, 0.8);\n}\n.main-wrapper {\n  flex: 1;\n  display: flex;\n  overflow: hidden;\n  background-color: #ebe8e2;\n}\n.sidebar {\n  margin: 16px;\n  width: 240px;\n  background-color: #3B221B;\n  color: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.sidebar.fechada {\n  width: 70px;\n  padding: 16px 8px;\n}\n.sidebar.fechada .sidebar-header {\n  justify-content: center;\n}\n.sidebar.fechada .sidebar-header .logo {\n  width: 30px;\n}\n.sidebar.fechada .menu button {\n  justify-content: center;\n}\n.sidebar.fechada .menu button span {\n  display: none;\n}\n.sidebar .sidebar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.sidebar .sidebar-header .logo {\n  width: 50px;\n  height: auto;\n}\n.sidebar .sidebar-header .close-button {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n}\n.sidebar .menu {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.sidebar .menu button {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: transparent;\n  border: 1px solid #F6BD38;\n  color: #F6BD38;\n  padding: 12px 16px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-weight: 500;\n  width: 100%;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n}\n.sidebar .menu button mat-icon {\n  font-size: 20px;\n}\n.sidebar .menu button:hover,\n.sidebar .menu button.active {\n  background-color: #F6BD38;\n  color: #3B221B;\n  border: 1px solid #F6BD38;\n}\n.content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.content .router-container {\n  flex: 1;\n  padding: 24px;\n  background-color: #ebe8e2;\n  overflow-y: auto;\n}\n.menu-toggle {\n  background: transparent;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-size: 24px;\n}\n::ng-deep .user-dropdown {\n  margin-top: 8px;\n}\n::ng-deep .user-dropdown .mat-mdc-menu-content {\n  padding: 0;\n}\n::ng-deep .user-dropdown .mat-mdc-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n}\n::ng-deep .user-dropdown .mat-mdc-menu-item mat-icon {\n  margin: 0;\n}\n.toolbar-search-bar {\n  flex: 1;\n  max-width: 700px;\n  margin: 0 32px;\n  align-self: center;\n  z-index: 20;\n  transition:\n    margin-left 0.3s,\n    box-shadow 0.3s,\n    transform 0.3s;\n}\n.sidebar-fechada {\n  margin-left: 0 !important;\n}\n@media (min-width: 900px) {\n  .toolbar-search-bar {\n    margin-left: 80px;\n  }\n  .sidebar-fechada.toolbar-search-bar {\n    margin-left: 0;\n  }\n}\n.toolbar-search-bar {\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 0.3s, transform 0.3s;\n}\n:host ::ng-deep .toolbar-search-bar.ng-animating {\n  opacity: 0;\n  transform: translateY(-30px);\n}\n@media (max-width: 900px) {\n  .toolbar-search-bar {\n    max-width: 98vw;\n    margin: 0 8px;\n  }\n}\n.toolbar-search-bar .mat-icon,\n.toolbar-search-bar .icon,\n.toolbar-search-bar .brown {\n  color: #3B221B !important;\n}\n/*# sourceMappingURL=layout-principal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutPrincipalComponent, { className: "LayoutPrincipalComponent", filePath: "src/app/pages/layout-principal/layout-principal.component.ts", lineNumber: 36 });
})();

export {
  LayoutPrincipalComponent
};
//# sourceMappingURL=chunk-U4WSNX3A.js.map
