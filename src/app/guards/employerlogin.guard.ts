import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EmployerService } from '../services/employer.service';
@Injectable({
  providedIn: 'root'
})
export class EmployerloginGuard implements CanActivate {
  constructor(
    private _authemp : EmployerService,
    private _router : Router
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._authemp.isLoggedIn())
    {
      return true;
    }
    else{
      this._router.navigate(["/"]);
      return false;
    }
  }
  check(){
    if(this._authemp.isLoggedIn())
    {
      return true;
    }
    else{
      return false;
    }
  }

}
