import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { Detail } from '../../models/detail';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() id : any;
  constructor(private _emp : SearchService,private _router : Router,
              private _route : ActivatedRoute) { }
  data : any;
  dataArray: Detail={
    organization_name : "",
    address : "",
    contact : [""],
    employeeCapacity : null,
    photos : "" ,
    email : "",
    director : [""] ,
    ceo : "",
    safetyRating : null
  };
  imageUrl : string;
  dat : any;
  msg = "";

  ngOnInit(): void {
    this._route.paramMap.subscribe((params : ParamMap)=>{
      let name = params.get('emailId');
      this.dat = name;
    })
    this._emp.searchEmployer(this.dat).subscribe(result=>{
        this.data = result['detail'];
        this.dataArray={
          organization_name :this.data.organization_name,
          address : this.data.address.city,
          contact : this.data.contact,
          employeeCapacity : this.data.employeeCapacity,
          photos : this.data.photos[0] ,
          email : this.data.email,
          director : this.data.director,
          ceo : this.data.ceo,
          safetyRating : this.data.safetyRating,
        }
        this.imageUrl = this.data.photos[0];
      },
      err=>{
        this.msg = "Check the spelling";
      });
  }
  callComponent(){
    let email = this.dataArray.email;
    let userType = localStorage.getItem("Usertype");
    if(userType=="employer"){
      this.msg = "You can not review another organisation";
    }
    else{
      this._router.navigate(["employer/addreviewbyemployee", email]);
    }
  }
  moreValue : boolean = false;
  more(){
    this.moreValue = ! this.moreValue;
  }
}
