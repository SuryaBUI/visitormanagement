import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthServices } from './auth-services';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGaurd implements CanActivate{
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;
    
    constructor(private authService: AuthServices, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.verify();
    }

    verify() {
    if (this.authService.isAuthenticated() === true ) {
            return true;
        } else {
            this.router.navigate(['login']);
        }
    }
}