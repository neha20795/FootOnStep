import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Employeelogin } from '../../models/employeelogin';
import { EmployeeService } from '../../services/employee.service';
import { EmployerService } from '../../services/employer.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMsg: any;
  checkforloginstatus : boolean = false;
  constructor(
    private _auth : EmployeeService,
    private _authr : EmployerService,
    private _router : Router,
    private fb:FormBuilder
  ) { }
  componentName : boolean = true;
  user : Employeelogin={
    username : "",
    password : ""
  };
  myForm : FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      email : ['', Validators.required],
      password :['', Validators.required],
    });
  }
  callComponent(){
    this.componentName = !this.componentName;
  }
  empLogin(){
    this.submitted = true;
    if(this.myForm.invalid){
      return;
    }
    this.user.username = this.myForm.controls['email'].value;
    this.user.password = this.myForm.controls['password'].value;
    this._auth.doLogin(this.user).subscribe(data=>{
        localStorage.setItem("mytoken", data.detail.email);
        localStorage.setItem("Usertype", "employee");
        this._auth.getmore(this.user.username).subscribe(data1=>{
          if(data1['add']){
            this._router.navigate(["/employee"]);
          }
          else{
            this._router.navigate(["/employee/addmore"]);
          }
        },
          error => {
          });
      },
      err=>{
        this.errorMsg = err.error.msg;
      });
  }

  emprLogin(){
    this.submitted = true;
    if(this.myForm.invalid){
      return;
    }
    this.user.username = this.myForm.controls['email'].value;
    this.user.password = this.myForm.controls['password'].value;
    this._authr.doLogin(this.user).subscribe(data=>{
        localStorage.setItem("mytoken", data.detail.email);
        localStorage.setItem("Usertype", "employer");
        this._authr.getmore(this.user.username).subscribe(data1=>{
            if(data1['add']){
              this._router.navigate(["/employer"]);
            }
            else{
              this._router.navigate(["/employer/addmore"]);
            }
          },
          error => {
          });
      },
      err=>{
        this.errorMsg = err.error.msg;
      });
  }
}
