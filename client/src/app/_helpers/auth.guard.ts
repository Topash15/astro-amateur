import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AccountService } from '@app/_services';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router;
        private accountService: AccountService
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const user = this.accountService.userValue;
        if(user){
            // authorized so return true;
            return true;
        }

        // no logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: {returnUrl: state.url}});
        return false;
    }
}