import { Component, OnInit } from '@angular/core';
import { Addmore } from '../../models/addmore';
import { UpdateService } from '../../services/update.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-updatemore',
  templateUrl: './updatemore.component.html',
  styleUrls: ['./updatemore.component.scss']
})
export class UpdatemoreComponent implements OnInit {

  msg : string;
information : Addmore ={
  employeeid : '',
  position :  '',
  profile :'' ,
  bio : '',
  facebook : '',
  twitter : '',
};
  constructor(private _update : UpdateService, private route: Router) { }
  ngOnInit(): void {
    this._update.getmore(localStorage.getItem("mytoken")).subscribe(data=>{

          this.information = {
            _id : data['detail']._id,
            employeeid : data['detail'].employeeid,
            position :  data['detail'].position,
            profile :data['detail'].profile ,
            bio : data['detail'].bio,
            facebook : data['detail'].facebook,
            twitter : data['detail'].twitter,
          }
    },
      error => {

      });
  }


 update(){

    this._update.updatemore(this.information).subscribe(data=>{

      let myurl = "/";
      this.route.navigateByUrl(myurl).then(e => {
        if (e) {

        } else {

        }
      });
    },
    error=>{

    })
 }

}
