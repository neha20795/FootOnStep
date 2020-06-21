import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

import { EmployeeloginGuard } from '../../guards/employeelogin.guard';
import {AuthService} from "../../services/auth.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _authServ : EmployeeService,
              private _authGuard : EmployeeloginGuard,
              public _auth : AuthService
              ) { }
  check : boolean = true;
  check2 : boolean = false;
  name : string;

  ngOnInit(): void {
    if(this._authServ.getToken()!=null){
      this.check = false;
      this.name = localStorage.getItem("mytoken");
    }
    else{
      this.check=true;
    }
  }
  componentName:string ='EmployeeLogin';
  message(compname){
    this.componentName = compname;
  }

}
