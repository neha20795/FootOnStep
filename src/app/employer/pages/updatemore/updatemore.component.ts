import { Component, OnInit } from '@angular/core';
import { Addmore } from '../../models/addmore';
import {UpdateService} from "../../services/update.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-updatemore',
  templateUrl: './updatemore.component.html',
  styleUrls: ['./updatemore.component.scss']
})
export class UpdatemoreComponent implements OnInit {

  msg : string;
  information : Addmore ={
    _id : '',
    employerid : '',
    technology :  '',
    message :'' ,
    bio : '',
    facebook : '',
    twitter : '',
  };
  constructor(private _update : UpdateService, private route: Router) { }
  check : boolean = false;
  ngOnInit(): void {
    this._update.getmore(localStorage.getItem("mytoken")).subscribe(data=>{

          this.information = data['detail'];

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
