import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private __http : HttpClient) { }
  findEmployee(name :string){
    return this.__http.get("http://localhost:3000/search/"+name);
  }
  searchEmployee(name :string){

    return this.__http.get("http://localhost:3000/detail/"+name);
  }
  reviewgiventoemployee(email : string){
    return this.__http.get("http://localhost:3000/review/employeetoemployee/giver/"+email);
  }
  reviewgiventoemployer(email : string){
    return this.__http.get("http://localhost:3000/review/employeetoemployer/giver/"+email);
  }
  reviewreceivedfromemployee(email : string){
    return this.__http.get("http://localhost:3000/review/employeetoemployee/receiver/"+email);
  }
  reviewreceivedfromemployer(email : string){
    return this.__http.get("http://localhost:3000/review/employertoemployee/receiver/"+email);
  }
  getEmployerId(name : string){
    return this.__http.get("http://localhost:3000/employer/"+name);
  }
  getAverageRating(name : string){
    return this.__http.get("http://localhost:3000/detail/average/"+name);
  }
}
