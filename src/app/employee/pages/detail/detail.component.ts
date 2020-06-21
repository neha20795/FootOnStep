import {Component, Input, OnInit} from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Detail } from '../../models/detail';
import { ConfidentialinformationService } from '../../../services/confidentialinformation.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() id : any;
  data : any;
  dat : any;
  msg = "";
  check : boolean;
  employee :any = [{
    good: [''],
    bad: [''],
    positon: '',
    rating: null,
  }];
  employer :any = [{
    good: [''],
    bad: [''],
    positon: '',
    rating: null,
    review : ['']
  }];
  avgerageReview : number;
  constructor(private _emp : SearchService,
              private _router : Router,
              private _route : ActivatedRoute,
              private _conf : ConfidentialinformationService) { }

  ngOnInit(): void {
    this.check = localStorage.getItem("Usertype")=='employer';
    this._route.paramMap.subscribe((params : ParamMap)=>{
      let name = params.get('emailId');
      this.dat = name;

      this._emp.searchEmployee(this.dat).subscribe(result=>{

          this.data = result['detail'];
          this._emp.getAverageRating(this.dat).subscribe(result1=>{

            let var1 = result1;
            this.avgerageReview = var1['averageRating'];
          },
            err=>{

            })
        },
        err=>{
          this.msg = "Check the spelling";
        });
    })
  }

  callComponent(){
    let email = this.data.email;
    let getUserType = localStorage.getItem("Usertype");


    if(getUserType == 'employee'){
      this._router.navigate(["employee/reviewbyemployee", email]);
    }
    else{
      this._router.navigate(["employee/reviewbyemployer", email]);
    }
  }
 confidentialInformationRequest(){
   let info = {
     SenderemailId : localStorage.getItem("mytoken"),
     ReceiverName : this.data.organization,
     EmployeeEmail : this.data.email,
     SenderStatus : true,
     ReceiverStatus : false,
     EmployeeStatus : false
   }
   this._conf.confidentialRequestNeed(info).subscribe(
     result=>{
       this.msg = result['msg'];
     },
     error => {

     }
   )
 }
 moreValue : boolean = false;
 more(){
   this.moreValue = ! this.moreValue;
   /*this._emp.reviewreceivedfromemployee(this.dat).subscribe(data11=>{
       this._emp.reviewreceivedfromemployer(this.dat).subscribe(data12=>{

           let empReview = data11['detail'];
           let orgreview = data12['detail'];
           this.employee = empReview;
           this.employer = orgreview;
         },
         error => {
         })
     },
     error => {
     })*/
 }
}
