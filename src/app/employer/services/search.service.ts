import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private __http : HttpClient) { }
  findEmployer(name :string){
    return this.__http.get("http://localhost:3000/employer/search/"+name);
  }
  searchEmployer(name :string){
    return this.__http.get("http://localhost:3000/employer/detail/"+name);
  }
  reviewgiventoemployee(email : string){
    return this.__http.get("http://localhost:3000/review/employertoemployee/giver/"+email);
  }
  reviewreceivedfromemployee(email : string){
    return this.__http.get("http://localhost:3000/review/employeetoemployer/receiver/"+email);
  }
}
