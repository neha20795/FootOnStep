import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private __http : HttpClient, private _router : Router) { }
  logout(){
    localStorage.removeItem("mytoken");         localStorage.clear();
    this._router.navigate(["/"]);
  }
  getToken(){
    if(this.isLoggedIn())
      return localStorage.getItem("mytoken");
    else
      return null;
  }
  isLoggedIn(){
    if(localStorage.getItem("mytoken")) {return true;}
    else  {return false;}
  }
}
