import { Component, OnInit } from '@angular/core';
import { ConfidentialinformationService } from '../../services/confidentialinformation.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-confidentialinformationsent',
  templateUrl: './confidentialinformationsent.component.html',
  styleUrls: ['./confidentialinformationsent.component.scss']
})
export class ConfidentialinformationsentComponent implements OnInit {
email : string;
information : any [];
  constructor(private _conf : ConfidentialinformationService,
              private _router : Router) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("mytoken")
    this._conf.confidentialRequestSent(this.email).subscribe(data=>{
        this.information = data['detail'];
      },
      error => {
      });
  }
 remove(value : string){
   this._conf.infoRemove(value).subscribe(data=>{
       this._router.navigate(["/"]);
     },
     error => {
     });
 }
  employee(e : string){
    this._router.navigate(["employee/detail", e]);
  }
  employer(e : string){
    this._router.navigate(["employer/detail", e]);
  }
}
