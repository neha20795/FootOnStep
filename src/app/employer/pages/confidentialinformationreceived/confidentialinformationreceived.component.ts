import { Component, OnInit } from '@angular/core';
import { ConfidentialinformationService } from '../../services/confidentialinformation.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-confidentialinformationreceived',
  templateUrl: './confidentialinformationreceived.component.html',
  styleUrls: ['./confidentialinformationreceived.component.scss']
})
export class ConfidentialinformationreceivedComponent implements OnInit {

  email : string;
  information : any[];
  constructor(private _conf : ConfidentialinformationService,
              private _router : Router) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("mytoken")
    this._conf.confidentialRequestRecieved(this.email).subscribe(data=>{

        this.information = data['detail'];
      },
      error => {

      });
  }
  accept(info : any){
    info.ReceiverStatus = true;
    console.log(info);
    this._conf.updateEmployerTwoStatus(info).subscribe(data=>{

      this._router.navigate(["/employer/addconfidentialinformation", info._id]);
      },
      error => {

      })
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
