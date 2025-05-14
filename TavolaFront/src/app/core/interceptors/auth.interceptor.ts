import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, EMPTY, throwError } from 'rxjs';
import { catchError, switchMap, filter, take, finalize } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject = new BehaviorSubject<string|null>(null);

  constructor(
    private auth: AuthService,
    private loginService: LoginService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    const authReq = request.clone({
      setHeaders: token ? { Authorization: `Bearer ${token}` } : {},
      withCredentials: true
    });

    return next.handle(authReq).pipe(
      catchError(err => {
        if (!(err instanceof HttpErrorResponse)) {
          return throwError(() => err);
        }

        // 1) se vier 401 no próprio /auth/refresh → logout e redirect imediato
        if (err.status === 401 && request.url.endsWith('/auth/refresh')) {
          this.auth.clearToken();
          this.router.navigate(['/login']);
          return EMPTY;
        }

        // 2) se vier 401 em qualquer outra → tenta renovar com refresh
        if (err.status === 401) {
          return this.handle401Error(authReq, next);
        }

        // outros erros (403, 500...) → propagar
        return throwError(() => err);
      })
    );
  }

  private handle401Error(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.loginService.refreshToken().pipe(
        switchMap(res => {
          this.auth.setToken(res.token);
          this.refreshTokenSubject.next(res.token);
          const retry = request.clone({
            setHeaders: { Authorization: `Bearer ${res.token}` },
            withCredentials: true
          });
          return next.handle(retry);
        }),
        catchError(_ => {
          // refresh estourou → limpa tudo e manda pra login
          this.auth.clearToken();
          this.router.navigate(['/login']);
          return EMPTY;
        }),
        finalize(() => {
          this.isRefreshing = false;
        })
      );
    }

    // se já estiver fazendo refresh, aguarda um token válido sair
    return this.refreshTokenSubject.pipe(
      filter(t => t != null),
      take(1),
      switchMap(tkn => {
        const retry = request.clone({
          setHeaders: { Authorization: `Bearer ${tkn!}` },
          withCredentials: true
        });
        return next.handle(retry);
      })
    );
  }
}
