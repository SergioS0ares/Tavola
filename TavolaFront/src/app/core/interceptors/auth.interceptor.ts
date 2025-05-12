import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import {
  Observable,
  throwError,
  switchMap,
  catchError,
  BehaviorSubject,
  filter,
  take
} from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject = new BehaviorSubject<string | null>(null);

  constructor(
    private auth: AuthService,
    private loginService: LoginService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.auth.getToken();
    if (token) {
      authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }

    return next.handle(authReq).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          console.log('[AuthInterceptor] 401 detected, attempting refresh…');
          return this.handle401Error(authReq, next);
        }
        return throwError(() => error);
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

      console.log('[AuthInterceptor] Calling refreshToken()');
      return this.loginService.refreshToken().pipe(
        switchMap(response => {
          console.log('[AuthInterceptor] New token received, retrying original request');
          this.isRefreshing = false;
          this.auth.setToken(response.token);
          this.refreshTokenSubject.next(response.token);

          // refaz a requisição original com o novo token
          return next.handle(
            request.clone({
              setHeaders: { Authorization: `Bearer ${response.token}` }
            })
          );
        }),
        catchError(err => {
          console.log('[AuthInterceptor] Refresh failed, redirecting to /login');
          this.isRefreshing = false;
          this.auth.clearToken();
          this.router.navigate(['/login']);
          return throwError(() => err);
        })
      );
    } else {
      // se já está fazendo refresh, aguarda o novo token
      return this.refreshTokenSubject.pipe(
        filter(tok => tok != null),
        take(1),
        switchMap(tok => {
          console.log('[AuthInterceptor] Waiting for existing refresh, then retry');
          return next.handle(
            request.clone({
              setHeaders: { Authorization: `Bearer ${tok}` }
            })
          );
        })
      );
    }
  }
}
