import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Update } from '../models/update';
import {Addmore} from "../../models/addmore";
@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private __http : HttpClient) { }
  updateData(email :string){
    return this.__http.get("http://localhost:3000/employer/update/"+email);
  }
  updatedData(email :string, data : Update){
    return this.__http.post("http://localhost:3000/employer/update/"+email, data);
  }
  addmore(information : Addmore){
    return this.__http.post("http://localhost:3000/employer/addmore", information);
  }
  getmore(employeeid : string){
    return this.__http.get("http://localhost:3000/employer/addmore/"+employeeid);
  }
  updatemore(data : any){
    return this.__http.put("http://localhost:3000/employer/addmore", data);
  }
}
