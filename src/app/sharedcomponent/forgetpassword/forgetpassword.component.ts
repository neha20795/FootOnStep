import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import { EmployeeService } from '../../services/employee.service';
import { EmployerService } from '../../services/employer.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  constructor( private _route : ActivatedRoute,
               private _employee : EmployeeService,
               private _employer : EmployerService,
               private _router : Router) { }
  email : string;
  componentName : string;
  ngOnInit(): void {
    this._route.paramMap.subscribe((params : ParamMap)=> {
      this.componentName = params.get('compname');
    });
  }
  send(){
    if(this.componentName=='true'){
      this._employee.changePassword(this.email).subscribe(data=>{
          this._router.navigate(["/home"]);
      },
        error => {
        })
    }
    else if(this.componentName=='false'){
      this._employer.changePassword(this.email).subscribe(data=>{
          this._router.navigate(["/home"]);
        },
        error => {
        })
    }
  }
}
