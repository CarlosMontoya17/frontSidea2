import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { storageKeys } from 'src/app/core/models/storageKeys.model';

@Injectable({
  providedIn: 'root'
})
export class JwtGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!localStorage.getItem(storageKeys.Token)){
      return this.router.navigate(['/']).then(() => false);
    }
     return true;
  }
  
}
