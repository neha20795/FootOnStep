import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Update } from '../models/update';
import { UpdateService } from '../services/update.service';
@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.scss']
})
export class UpdatedetailsComponent implements OnInit {
  empDetails : Update = {
    fname : "", lname : "",
    address :{house_no : null, street : "", town : "", city : "", state : "", country : "", pincode : null},
    organization : "", qualification : "", experience : null, gender : '', mobile : ['']
  }
  mob : string;
  constructor(private _emp: UpdateService,
              private _router : Router) { }

  email : string;
  ngOnInit(): void {

    this.email = localStorage.getItem("mytoken");
    this._emp.updateData(this.email).subscribe(data=>{

        let datanote =data['detail'];

        this.empDetails ={
          fname :datanote.fname,
          lname : datanote.lname,
          address : {
            house_no : datanote.address.house_no,
            street : datanote.address.street,
            town : datanote.address.town,
            city : datanote.address.city,
            state : datanote.address.state,
            country : datanote.address.country,
            pincode : datanote.address.pincode
          },
          organization : datanote.organization,
          qualification : datanote.qualification,
          experience : datanote.experience,
          gender : datanote.gender,
          mobile : datanote.mobile
        }
        let len = datanote.mobile.length;
        this.mob = datanote.mobile[len-1];
      },
      err=>{

      })
  }
  update(){

    // for(let i=0;i<this.empDetails.mobile.length;i++){

    //   this.mob.push(this.empDetails.mobile[i]);
    // }
    let len = this.mob.length;

    this.empDetails.mobile.push(this.mob);


    // this.mob = Array.from(new Set(this.mob));
    //this.empDetails.mobile = this.mob;
    this._emp.updatedData(this.email, this.empDetails).subscribe(data=>{

        this._router.navigate(["/"]);
      },
      err=>{

      });
  }
 addmore(){
   this._router.navigate(["/employee/updatemore"]);
 }
}
