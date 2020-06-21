import { Injectable } from '@angular/core';
import { Addreviewbyemployee } from '../models/addreviewbyemployee'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeetoemployerService {

  constructor(private __http : HttpClient) { }
  addEmployeeReview(empreview:Addreviewbyemployee) {
    // return this.allStudent;
    return this.__http.post<any>("http://localhost:3000/review/employeetoemployer", empreview);

  }
  emptyReview(){
    return {
      empid : "",
      orgid : "",
      pros : [""],
      cons : [""],
      rating: null,
      type : ""
    }
  }
}
