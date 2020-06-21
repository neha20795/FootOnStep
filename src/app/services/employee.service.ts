import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { Employeelogin } from '../models/employeelogin';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private __http : HttpClient, private _router : Router) { }

  addEmployee(employee : Employee){
    return this.__http.post<any>("http://localhost:3000", employee);
  }
  doLogin(user:Employeelogin){
    // localStorage.clear();
    return this.__http.post<any>("http://localhost:3000/login", user);
  }

  findemp(emailid : string){
    return this.__http.get("http://localhost:3000/detail/average/"+ emailid);
  }
  getEmployers(){
    return this.__http.get("http://localhost:3000/employer/getlist/getdetail");
  }
  changePassword(email : string){
    return this.__http.get("http://localhost:3000/forgotpassword/"+ email);
  }
  getmore(email : string){

    return this.__http.get("http://localhost:3000/addmore/"+ email);
  }
  logout(){
    localStorage.removeItem("mytoken");         localStorage.clear();
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
  emptyEmployee(){
    return {
      fname : "", lname : "", dob : new Date(), email : "", password :"",
      address : { house_no : null, street : "", town : "", city : "", state : "", country : "", pincode : null},
      organization : "", qualification : 0, mobile : [""], experience : 0, gender : '', image : [""]
    }
  }

}
