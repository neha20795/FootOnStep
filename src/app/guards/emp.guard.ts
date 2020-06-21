import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {EmployeeService} from "../services/employee.service";
import { EmployerService } from '../services/employer.service';

@Injectable({
  providedIn: 'root'
})
export class EmpGuard implements CanActivate {
  constructor(
    private _authemp : EmployeeService,
    private _authempr : EmployerService,
    private _router : Router
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._authemp.isLoggedIn() || this._authempr.isLoggedIn())
    {
      return true;
    }
    else{
      this._router.navigate(["/"]);
      return false;
    }
  }
  check(){
    if(this._authemp.isLoggedIn() || this._authempr.isLoggedIn())
    {
      return true;
    }
    else{
      return false;
    }
  }

}
