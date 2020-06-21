import { Component, OnInit } from '@angular/core';
import { Employeelogin } from  '../../models/employeelogin';
import { Employerlogin } from  '../../models/employerlogin';
import { EmployeeService } from '../../services/employee.service';
import { EmployerService } from '../../services/employer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginui',
  templateUrl: './loginui.component.html',
  styleUrls: ['./loginui.component.scss']
})
export class LoginuiComponent implements OnInit {

  constructor( private _auth : EmployeeService,
               private _authr : EmployerService,
               private _router : Router,) { }
  componentName : boolean = true;
  errorMsg : string;
  ngOnInit(): void {
  }
  callAnotherComponent(){
    this.componentName = !this.componentName;
  }
  user : Employeelogin={
    username : "",
    password : ""
  };
  login(){
      this._auth.doLogin(this.user).subscribe(data=>{
          localStorage.setItem("mytoken", this.user.username);
          localStorage.setItem("Usertype", "employee");
          this._router.navigate(["/employee"]);
        },
        err=>{
          this.errorMsg = err.error.msg;
        });
  }
  loginEmpr(){
    this._authr.doLogin(this.user).subscribe(data=>{
        localStorage.setItem("mytoken", this.user.username);
        localStorage.setItem("Usertype", "employer");
        this._router.navigate(["/employer"]);
      },
      err=>{
        this.errorMsg = err.error.msg;
      });
  }
}
