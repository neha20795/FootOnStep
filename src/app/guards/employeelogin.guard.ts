import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeloginGuard implements CanActivate {
  constructor(
    private _authemp : EmployeeService,
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
