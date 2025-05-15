import { bootstrapApplication }              from '@angular/platform-browser';
import { importProvidersFrom }               from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations }                 from '@angular/platform-browser/animations';
import { provideNgxMask }                    from 'ngx-mask';

import { AppComponent }                      from './app/app.component';
import { AuthInterceptor }                   from './app/core/interceptors/auth.interceptor';
import { appConfig }                         from './app/app.config';

// ─── ng-zorro imports ──────────────────────────────────────────────────────────
import { NzIconModule, NZ_ICONS }            from 'ng-zorro-antd/icon';
import {
  HomeOutline,
  EnvironmentOutline,
  FlagOutline,
  HeartOutline,
  HeartFill,
  StarOutline,
  StarFill
} from '@ant-design/icons-angular/icons';

import { NzBreadCrumbModule }                from 'ng-zorro-antd/breadcrumb';
import { NzGridModule }                      from 'ng-zorro-antd/grid';
import { NzImageModule }                     from 'ng-zorro-antd/image';
import { NzButtonModule }                    from 'ng-zorro-antd/button';
import { NzTagModule }                       from 'ng-zorro-antd/tag';
import { NzTypographyModule }                from 'ng-zorro-antd/typography';
import { NzSpaceModule }                     from 'ng-zorro-antd/space';
// ────────────────────────────────────────────────────────────────────────────────

// monte o array de ícones que vai usar
const icons = [
  HomeOutline,
  EnvironmentOutline,
  FlagOutline,
  HeartOutline,
  HeartFill,
  StarOutline,
  StarFill
];

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    // 0) registra módulos ng-zorro no injector global
    importProvidersFrom(
      NzIconModule,
      NzBreadCrumbModule,
      NzGridModule,
      NzImageModule,
      NzButtonModule,
      NzTagModule,
      NzTypographyModule,
      NzSpaceModule
    ),

    // 1) registra seus IconDefinitions pro NzIconModule
    { provide: NZ_ICONS, useValue: icons },

    // 2) HTTP Client + interceptors
    provideHttpClient(withInterceptorsFromDi()),

    // 3) seu AuthInterceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

    // 4) outros providers do appConfig
    ...(appConfig.providers || []),

    // 5) ngx-mask
    provideNgxMask(),

    // 6) animações
    provideAnimations()
  ]
})
.catch(err => console.error(err));
