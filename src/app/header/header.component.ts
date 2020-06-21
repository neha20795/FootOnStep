import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeloginGuard } from '../guards/employeelogin.guard';
import {AuthService} from "../services/auth.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  check : boolean = true;
  name : string;
  constructor(
    private _authServ : EmployeeService,
    private _authGuard : EmployeeloginGuard,
    public _auth : AuthService
  ) { }

  ngOnInit(): void {
    // if(this._authServ.getToken()!=null){
    //   this.check = false;
    //   this.name = localStorage.getItem("mytoken");
    // }
    // else{
    //   this.check=true;
    // }
  }
  add(){

  }
  logoutUser(){
    this._authServ.logout();
    this.check = this._authGuard.check();
  }
}
