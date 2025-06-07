import { ApplicationConfig, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

// Imports necessários para NG-ZORRO e internacionalização
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { provideNzI18n, pt_BR } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  CarOutline, HomeOutline, EnvironmentOutline, FlagOutline, HeartOutline, HeartFill,
  LeftOutline, RightOutline, CalendarOutline, ClockCircleOutline, TeamOutline,
  CheckCircleOutline, ExclamationCircleOutline, FireFill, CopyOutline, CheckOutline,
} from "@ant-design/icons-angular/icons";

// Registra a localidade "pt" para o Angular
registerLocaleData(pt);

// Define o conjunto de ícones que será usado na aplicação
const icons: IconDefinition[] = [
  CarOutline, HomeOutline, EnvironmentOutline, FlagOutline, HeartOutline, HeartFill,
  LeftOutline, RightOutline, CalendarOutline, ClockCircleOutline, TeamOutline,
  CheckCircleOutline, ExclamationCircleOutline, FireFill, CopyOutline, CheckOutline,
];


export const appConfig: ApplicationConfig = {
  providers: [
    // Provedores existentes
    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(), // Removida a duplicação
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    // CORREÇÃO: Provedores centralizados adicionados aqui
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideNzI18n(pt_BR),
    importProvidersFrom(NzIconModule.forRoot(icons))
  ]
};
