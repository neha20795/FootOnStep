import { Component, OnInit } from '@angular/core';
import { ConfidentialinformationService } from '../../../services/confidentialinformation.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-confidentialinformationrequest',
  templateUrl: './confidentialinformationrequest.component.html',
  styleUrls: ['./confidentialinformationrequest.component.scss']
})
export class ConfidentialinformationrequestComponent implements OnInit {
email : string;
information : any;
  constructor(private _conf : ConfidentialinformationService,
              private _router : Router,) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("mytoken")
    this._conf.confidentialRequestEmployee(this.email).subscribe(data=>{

      this.information = data['detail'];
    },
      error => {

      })
  }
  accept(information : any){
  information.EmployeeStatus = true;
    this._conf.confidentialRequestEmployeeAccept(information).subscribe(
      data=>
      {

        if(data['msg']=='success'){
          this._router.navigate(["/home"]);
        }
      },
      error =>
      {

      }
    )
  }
  employer(e : string){
    this._router.navigate(["employer/detail", e]);
  }
}
