import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(@Inject(Router) private router: Router, private auth: AuthService, private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const token = this.auth.getToken();
    if (token) {
      return of(true);
    }
    // Tenta renovar o token usando o refreshToken (cookie HttpOnly)
    return this.loginService.refreshToken().pipe(
      map((response) => {
        this.auth.setToken(response.token);
        return true;
      }),
      catchError(() => of(this.router.createUrlTree(['/login'])))
    );
  }
}
