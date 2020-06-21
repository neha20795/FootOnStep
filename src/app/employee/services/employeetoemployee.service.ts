import { Injectable } from '@angular/core';
import { Addreviewbyemployee } from '../models/addreviewbyemployee';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeetoemployeeService {

  constructor(private __http : HttpClient) { }

  addReview(emptoempreview:Addreviewbyemployee) {
    // return this.allStudent;

    return this.__http.post<any>("http://localhost:3000/review/employeetoemployee", emptoempreview);
  }
  emptyReview(){
    return {
      empidgiver : "",
      good : [""],
      bad :[""],
      positon : "",
      rating : null,
      empidreciever : ""
    }
  }

}
