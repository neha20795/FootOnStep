import { Injectable } from '@angular/core';
import { Employer } from '../models/employer';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Employeelogin } from '../models/employeelogin';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private __http : HttpClient, private _router : Router) { }

  addEmployer(employer:Employer) {
    // return this.allStudent;
    return this.__http.post<any>("http://localhost:3000/employer", employer);
  }
  doLogin(user:Employeelogin){
    return this.__http.post<any>("http://localhost:3000/employer/login", user);
  }
  logout(){
    localStorage.removeItem("mytoken");
    localStorage.clear();
    this._router.navigate(["/"]);
  }
  getToken(){
    if(this.isLoggedIn)
      return localStorage.getItem("mytoken");
    else
      return null;
  }
  isLoggedIn(){
    if(localStorage.getItem("mytoken")) {return true;}
    else  {return false;}
  }
  changePassword(email : string){
    return this.__http.get("http://localhost:3000/employer/forgotpassword/"+ email);
  }
  getmore(email : string){
    return this.__http.get("http://localhost:3000/employer/addmore/"+ email);
  }
  emptyEmployeer(){
    return {
      organization_name : "", registration_date : null, certification_type : "", director : [""], email : "", password : "", ceo : "",
      address : {house_no : null, street : "", town : "", city : "", state : "", country : "", pincode : null},
      contact : [""], employeeCapacity : null, safetyRating : null, photos : [""]
    }
  }

}
