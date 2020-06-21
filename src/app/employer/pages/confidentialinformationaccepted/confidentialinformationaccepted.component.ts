import { Component, OnInit } from '@angular/core';
import { ConfidentialinformationService } from '../../services/confidentialinformation.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-confidentialinformationaccepted',
  templateUrl: './confidentialinformationaccepted.component.html',
  styleUrls: ['./confidentialinformationaccepted.component.scss']
})
export class ConfidentialinformationacceptedComponent implements OnInit {

  email : string;
  information : any[];
  constructor(private _conf : ConfidentialinformationService,
              private _router : Router) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("mytoken");
    this._conf.cofidentialRequestAccepted(this.email).subscribe(data=>{

      this.information = data['detail'];
    },
      error => {

      })
  }
 detail(id : string){
    // routeing info
   this._router.navigate(["/employer/confidentialdata", id]);
 }
 employee(e : string){
   this._router.navigate(["employee/detail", e]);
 }
 employer(e : string){
   this._router.navigate(["employer/detail", e]);
 }
}
