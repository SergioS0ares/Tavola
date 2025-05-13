import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';

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
    // 1️⃣ Clone inicial: anexa Authorization (se existir) + envia cookies
    const token = this.auth.getToken();
    const authReq = request.clone({
      setHeaders: token ? { Authorization: `Bearer ${token}` } : {},
      withCredentials: true   // ← obrigatório para enviar o cookie HttpOnly de refresh
    });

    return next.handle(authReq).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          // detectou expiração ou falta de token → tenta refresh
          return this.handle401Error(authReq, next);
        }
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

      // chama o endpoint de refresh (lembre-se de usar withCredentials lá também)
      return this.loginService.refreshToken().pipe(
        switchMap(res => {
          this.isRefreshing = false;
          this.auth.setToken(res.token);
          this.refreshTokenSubject.next(res.token);

          // 2️⃣ Refaça a requisição original com novo token + envio de cookies
          const retryReq = request.clone({
            setHeaders: { Authorization: `Bearer ${res.token}` },
            withCredentials: true
          });
          return next.handle(retryReq);
        }),
        catchError(refreshErr => {
          // se o refresh falhar, limpa estado e joga para login
          this.isRefreshing = false;
          this.auth.clearToken();
          this.router.navigate(['/login']);
          return throwError(() => refreshErr);
        })
      );
    }

    // se já estiver fazendo refresh, aguarda o novo token
    return this.refreshTokenSubject.pipe(
      filter(t => t != null),
      take(1),
      switchMap(token => {
        const retryReq = request.clone({
          setHeaders: { Authorization: `Bearer ${token!}` },
          withCredentials: true
        });
        return next.handle(retryReq);
      })
    );
  }
}
