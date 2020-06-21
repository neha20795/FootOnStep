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
    organization_name : '', certification_type :'' , director : [''], ceo :'' ,
    address : {house_no : null, street : '', town : '', city : '', state :'' , country : '', pincode : null},
    contact : [''], employeeCapacity : null, safetyRating : null,
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
          organization_name : datanote.organization_name,
          certification_type : datanote.certification_type ,
          director : datanote.director,
          ceo : datanote.ceo,
          address :datanote.address ,
          contact : datanote.contact,
          employeeCapacity : datanote.employeeCapacity,
          safetyRating : datanote.safetyRating,
        }
        let len = datanote.contact.length;
        this.mob = datanote.contact[len-1];
      },
      err=>{
      })
  }
  update(){
    // for(let i=0;i<this.empDetails.mobile.length;i++){
    //   this.mob.push(this.empDetails.mobile[i]);
    // }
    let len = this.mob.length;

    this.empDetails.contact.push(this.mob);

    // this.mob = Array.from(new Set(this.mob));
    //this.empDetails.mobile = this.mob;
    this._emp.updatedData(this.email, this.empDetails).subscribe(data=>{
        this._router.navigate(["/"]);
      },
      err=>{
      });
  }
  addmore(){
    this._router.navigate(["/employer/showmore"]);
  }
}
