import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class ConfidentialinformationService {

  constructor(private __http : HttpClient) { }

  addConfidentialinformation(info : any){
    return this.__http.post<any>("http://localhost:3000", info);
  }
  confidentialRequestNeed(info : any){
    return this.__http.post<any>("http://localhost:3000/confidentialinformation", info);
  }
  confidentialRequestEmployee(email : string){
    return this.__http.get("http://localhost:3000/confidentialinformation/employee/"+email);
    // return "inside services";
  }
  confidentialRequestEmployeeAccept(information : any){
     // return this.__http.put<any>(`confidentialinformation/employee/update`, information);
    // let id = information.SenderemailId;
    return this.__http.post<any>("http://localhost:3000/confidentialinformation/employee/update", information);

  }
}
