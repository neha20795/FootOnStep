import { Component, OnInit } from '@angular/core';
import { Addmore } from '../../models/addmore';
import {UpdateService} from "../../services/update.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-addmore',
  templateUrl: './addmore.component.html',
  styleUrls: ['./addmore.component.scss']
})
export class AddmoreComponent implements OnInit {

  msg : string;
  information : Addmore ={
    employerid : '',
    technology :  '',
    message :'' ,
    bio : '',
    facebook : '',
    twitter : '',
  };
  constructor(private _update : UpdateService, private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("signupid")) {
      this.information.employerid = localStorage.getItem("signupid");
    }
    else{
      this.information.employerid = localStorage.getItem("mytoken");
    }
  }
  add(){
      console.log(this.information);
    this._update.addmore(this.information).subscribe(data=>{

        let myurl = "/";
        this.route.navigateByUrl(myurl).then(e => {
          if (e) {
            localStorage.clear();

          } else {

          }
        });
      },
      err=>{

      })
  }


}
