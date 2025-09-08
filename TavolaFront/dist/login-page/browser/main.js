import {
  NzBreadCrumbModule,
  NzGridModule,
  NzTypographyModule
} from "./chunk-OUZASSRG.js";
import {
  NzImageModule
} from "./chunk-XUYENL7J.js";
import {
  NzTagModule,
  pt_default
} from "./chunk-WNIENI65.js";
import "./chunk-OO7IWOFT.js";
import "./chunk-G67UQEMG.js";
import {
  GlobalSpinnerComponent
} from "./chunk-M3IXWULH.js";
import "./chunk-BNJ4MUQB.js";
import {
  NZ_I18N,
  provideNzI18n,
  pt_BR
} from "./chunk-K7WFS432.js";
import {
  provideNgxMask
} from "./chunk-DJ5CI4CU.js";
import {
  LoginService
} from "./chunk-SEAVMKBC.js";
import {
  AuthService
} from "./chunk-PZUSUSHQ.js";
import "./chunk-XAACXT24.js";
import {
  NzMessageModule
} from "./chunk-LYHKJYZI.js";
import "./chunk-QJYZSRL2.js";
import "./chunk-RUUFL2BH.js";
import "./chunk-M5EPCEBA.js";
import "./chunk-IHMVYCI2.js";
import {
  provideToastr
} from "./chunk-FTC7ZL3K.js";
import "./chunk-X4ULZSL7.js";
import "./chunk-B6PCS4YX.js";
import {
  NzButtonModule,
  NzSpaceModule,
  provideAnimations
} from "./chunk-WXYLYLSJ.js";
import "./chunk-3I5GT2UP.js";
import {
  CalendarOutline,
  CarOutline,
  CheckCircleOutline,
  CheckOutline,
  ClockCircleOutline,
  CopyOutline,
  EnvironmentOutline,
  ExclamationCircleOutline,
  FireFill,
  FlagOutline,
  HeartFill,
  HeartOutline,
  HomeOutline,
  LeftOutline,
  NZ_ICONS,
  NzIconModule,
  RightOutline,
  StarFill,
  StarOutline,
  TeamOutline
} from "./chunk-TIW6MRUB.js";
import "./chunk-X3P5AUPX.js";
import "./chunk-SM7NAYZH.js";
import {
  Router,
  RouterOutlet,
  provideRouter
} from "./chunk-5CK7YN5Y.js";
import {
  DOCUMENT,
  DomRendererFactory2,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  bootstrapApplication,
  provideHttpClient,
  registerLocaleData,
  withFetch,
  withInterceptorsFromDi
} from "./chunk-IOJADCVY.js";
import "./chunk-ZE3YZEND.js";
import {
  ANIMATION_MODULE_TYPE,
  BehaviorSubject,
  ChangeDetectionScheduler,
  Component,
  EMPTY,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  LOCALE_ID,
  NgZone,
  RendererFactory2,
  RuntimeError,
  __spreadProps,
  __spreadValues,
  catchError,
  filter,
  finalize,
  importProvidersFrom,
  inject,
  makeEnvironmentProviders,
  map,
  of,
  performanceMarkFeature,
  setClassMetadata,
  switchMap,
  take,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵinject,
  ɵɵinvalidFactory
} from "./chunk-CO622P43.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.title = "login-page";
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet")(1, "app-global-spinner");
      }
    }, dependencies: [RouterOutlet, GlobalSpinnerComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet, GlobalSpinnerComponent],
      template: `<router-outlet />
  <app-global-spinner></app-global-spinner> `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 12 });
})();

// src/app/core/interceptors/auth.interceptor.ts
var AuthInterceptor = class _AuthInterceptor {
  constructor(auth, loginService, router) {
    this.auth = auth;
    this.loginService = loginService;
    this.router = router;
    this.isRefreshing = false;
    this.refreshTokenSubject = new BehaviorSubject(null);
  }
  intercept(request, next) {
    const isApiRequest = request.url.startsWith("http://localhost:8080");
    const token = this.auth.getToken();
    const authReq = isApiRequest ? request.clone({
      setHeaders: token ? { Authorization: `Bearer ${token}` } : {},
      withCredentials: true
    }) : request.clone({ withCredentials: false });
    return next.handle(authReq).pipe(catchError((err) => {
      if (!(err instanceof HttpErrorResponse)) {
        return throwError(() => err);
      }
      if (err.status === 401 && request.url.endsWith("/auth/refresh")) {
        this.auth.clearAuthData();
        this.router.navigate(["/login"]);
        return EMPTY;
      }
      if (err.status === 401) {
        return this.handle401Error(authReq, next);
      }
      return throwError(() => err);
    }));
  }
  handle401Error(request, next) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      return this.loginService.refreshToken().pipe(switchMap((res) => {
        this.refreshTokenSubject.next(res.token);
        const retry = request.clone({
          setHeaders: { Authorization: `Bearer ${res.token}` },
          withCredentials: true
        });
        return next.handle(retry);
      }), catchError((_) => {
        this.auth.clearAuthData();
        this.router.navigate(["/login"]);
        return EMPTY;
      }), finalize(() => {
        this.isRefreshing = false;
      }));
    }
    return this.refreshTokenSubject.pipe(filter((t) => t != null), take(1), switchMap((tkn) => {
      const retry = request.clone({
        setHeaders: { Authorization: `Bearer ${tkn}` },
        withCredentials: true
      });
      return next.handle(retry);
    }));
  }
  static {
    this.\u0275fac = function AuthInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthInterceptor)(\u0275\u0275inject(AuthService), \u0275\u0275inject(LoginService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthInterceptor, [{
    type: Injectable
  }], () => [{ type: AuthService }, { type: LoginService }, { type: Router }], null);
})();

// src/app/core/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  constructor(router, auth, loginService) {
    this.router = router;
    this.auth = auth;
    this.loginService = loginService;
  }
  canActivate(route, state) {
    const token = this.auth.getToken();
    if (token) {
      return of(true);
    }
    return this.loginService.refreshToken().pipe(map((response) => {
      this.auth.setToken(response.token);
      return true;
    }), catchError(() => of(this.router.createUrlTree(["/login"]))));
  }
  static {
    this.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(AuthService), \u0275\u0275inject(LoginService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router, decorators: [{
    type: Inject,
    args: [Router]
  }] }, { type: AuthService }, { type: LoginService }], null);
})();

// src/app/core/guards/role.guard.ts
var roleGuard = (route) => {
  const auth = inject(AuthService);
  const roles = route.data["roles"];
  return roles.includes(auth.perfil?.tipo ?? "");
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    loadComponent: () => import("./chunk-HJOYFR66.js").then((m) => m.LoginComponent)
  },
  {
    path: "signup",
    loadComponent: () => import("./chunk-ZGKTLMQW.js").then((m) => m.SignUpComponent)
  },
  {
    path: "verificacao-email",
    loadComponent: () => import("./chunk-WBHRBN4A.js").then((m) => m.VerificacaoEmailComponent)
  },
  {
    path: "confirmar-codigo/:id",
    loadComponent: () => import("./chunk-IXSB3W2Z.js").then((m) => m.ConfirmarCodigoComponent)
  },
  {
    path: "",
    loadComponent: () => import("./chunk-POFXPDCQ.js").then((m) => m.LayoutPrincipalComponent),
    canActivate: [AuthGuard],
    children: [
      {
        path: "home",
        children: [
          { path: "", loadComponent: () => import("./chunk-UUQIRZFL.js").then((m) => m.HomeComponent), canActivate: [roleGuard], data: { roles: ["CLIENTE"] } },
          { path: "agendamento-reservas-restaurante/:id", loadComponent: () => import("./chunk-YDNZ7MJI.js").then((m) => m.AgendamentoReservasRestauranteComponent) }
        ]
      },
      { path: "meu-restaurante", loadComponent: () => import("./chunk-YJR4RZXQ.js").then((m) => m.MeuRestauranteComponent), canActivate: [roleGuard], data: { roles: ["RESTAURANTE"] } },
      { path: "cadastro-cardapio", loadComponent: () => import("./chunk-RM53WYZM.js").then((m) => m.CadastroCardapioComponent), canActivate: [roleGuard], data: { roles: ["RESTAURANTE"] } },
      { path: "reserva", loadComponent: () => import("./chunk-ZPFMZMO4.js").then((m) => m.ReservasComponent), canActivate: [roleGuard], data: { roles: ["RESTAURANTE"] } },
      { path: "historico", loadComponent: () => import("./chunk-CHA47W3A.js").then((m) => m.HistoricoReservasComponent), canActivate: [roleGuard], data: { roles: ["CLIENTE"] } },
      { path: "configuracoes", loadComponent: () => import("./chunk-HETE7IBZ.js").then((m) => m.ConfiguracoesComponent), canActivate: [AuthGuard] },
      { path: "", redirectTo: "home", pathMatch: "full" }
    ]
  },
  { path: "**", redirectTo: "login" }
];

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-YNC3BOHW.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  // List of callbacks that need to be replayed on the animation renderer once its loaded
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app/app.config.ts
registerLocaleData(pt_default);
var icons = [
  CarOutline,
  HomeOutline,
  EnvironmentOutline,
  FlagOutline,
  HeartOutline,
  HeartFill,
  LeftOutline,
  RightOutline,
  CalendarOutline,
  ClockCircleOutline,
  TeamOutline,
  CheckCircleOutline,
  ExclamationCircleOutline,
  FireFill,
  CopyOutline,
  CheckOutline
];
var appConfig = {
  providers: [
    // Provedores existentes
    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    // Removida a duplicação
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // CORREÇÃO: Provedores centralizados adicionados aqui
    { provide: LOCALE_ID, useValue: "pt-BR" },
    provideNzI18n(pt_BR),
    importProvidersFrom(NzIconModule.forRoot(icons))
  ]
};

// src/main.ts
registerLocaleData(pt_default);
var icons2 = [
  HomeOutline,
  EnvironmentOutline,
  FlagOutline,
  HeartOutline,
  HeartFill,
  StarOutline,
  StarFill,
  TeamOutline
];
bootstrapApplication(AppComponent, __spreadProps(__spreadValues({}, appConfig), {
  providers: [
    importProvidersFrom(NzIconModule, NzBreadCrumbModule, NzGridModule, NzImageModule, NzButtonModule, NzTagModule, NzTypographyModule, NzSpaceModule, NzMessageModule),
    { provide: NZ_ICONS, useValue: icons2 },
    { provide: LOCALE_ID, useValue: "pt" },
    { provide: NZ_I18N, useValue: pt_BR },
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    ...appConfig.providers || [],
    provideNgxMask(),
    provideAnimations()
  ]
})).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v19.2.9
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
