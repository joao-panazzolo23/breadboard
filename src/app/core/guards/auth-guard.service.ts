import {CanActivate, Router, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth-service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {

    if (this.auth.isLogged()) {
      return true;
    }
    //Creating trees creates an internal representation of the routing to where angular routing should go
    return this.router.createUrlTree(['/login']);
  }
}
