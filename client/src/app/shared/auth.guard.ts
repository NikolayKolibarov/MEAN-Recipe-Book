import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { IdentityService } from './identity.service'

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private identityService: IdentityService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.identityService.isAuthenticated();
    }
}