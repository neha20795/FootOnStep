import { Injectable } from '@angular/core';
import { Addreviewbyemployer} from '../models/addreviewbyemployer';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployertoemployeeService {

  constructor(private __http : HttpClient) { }
  addEmployerReview(orgreview : Addreviewbyemployer) {
    // return this.allStudent;

    return this.__http.post<any>("http://localhost:3000/review/employertoemployee", orgreview);
  }
  emptyReview(){
    return {
      empid : null,
      organizationid : null,
      review : [""],
      good : [""],
      bad : [""],
      position : "",
      rating : null
    }
  }
}
