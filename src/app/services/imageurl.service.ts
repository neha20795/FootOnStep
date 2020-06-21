import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ImageurlService {

  constructor(private __http : HttpClient, private _router : Router) { }

  imageEmployee(emailid : string){
    return this.__http.get("http://localhost:3000/addimage/"+ emailid);
  }
  imageEmployer(emailid : string){
    return this.__http.get("http://localhost:3000/employer/addimage/"+ emailid);
  }
  changeEmployee(information : any){
    return this.__http.put<any>("http://localhost:3000/changepassword", information);
  }
  changeEmployer(information : any){
    return this.__http.put<any>("http://localhost:3000/employer/changepassword", information);
  }
}
