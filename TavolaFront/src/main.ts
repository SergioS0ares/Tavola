import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent }       from './app/app.component';
import { AuthInterceptor }    from './app/core/interceptors/auth.interceptor';
import { provideNgxMask }     from 'ngx-mask';
import { appConfig }          from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    // 1) HTTP Client com interceptors vindos do DI
    provideHttpClient(withInterceptorsFromDi()),

    // 2) Registro do AuthInterceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

    // 3) Outros providers já existentes
    ...(appConfig.providers || []),

    // 4) Máscaras de input
    provideNgxMask(),

    // 5) Animations
    provideAnimations()
  ]
}).catch(err => console.error(err));
