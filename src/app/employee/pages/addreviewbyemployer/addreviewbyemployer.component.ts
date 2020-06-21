import { Component, OnInit } from '@angular/core';
import { Addreviewbyemployer } from '../../models/addreviewbyemployer';
import { EmployertoemployeeService } from '../../services/employertoemployee.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { FormControl, FormArray} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-addreviewbyemployer',
  templateUrl: './addreviewbyemployer.component.html',
  styleUrls: ['./addreviewbyemployer.component.scss']
})
export class AddreviewbyemployerComponent implements OnInit {
  reviewForm:FormGroup;
  constructor(
    private _emp : EmployertoemployeeService,
    private route: Router,
    private _route : ActivatedRoute,
    private fb:FormBuilder) {
    this.reviewForm=this.fb.group({
      goodreviews: this.fb.array([]) ,
      badreviews: this.fb.array([]) ,
    })
  }
  review : Addreviewbyemployer={
    empid : null,
    organizationid : null,
    review : [""],
    good : [""],
    bad : [""],
    position : "",
    rating : null
  };
  dat : any;
  ngOnInit(): void {
    this._route.paramMap.subscribe((params : ParamMap)=>{
      let name = params.get('id');
      this.dat = name;
    })
  }
  goodreviews(): FormArray {
    return this.reviewForm.get("goodreviews") as FormArray
  }
  newGoodReview(): FormGroup {
    return this.fb.group({
      goodreview: ''
    })
  }
  addGoodReview() {

    this.goodreviews().push(this.newGoodReview());
  }
  removeGoodReview(mobIndex:number) {
    this.goodreviews().removeAt(mobIndex);
  }

  badreviews(): FormArray {
    return this.reviewForm.get("badreviews") as FormArray
  }
  newBadReview(): FormGroup {
    return this.fb.group({
      badreview: ''
    })
  }
  addBadReview() {

    this.badreviews().push(this.newBadReview());
  }
  removebadReview(mobIndex:number) {
    this.badreviews().removeAt(mobIndex);
  }
  msg : string;
  add(){

    let badCount = (this.reviewForm.get(['badreviews']).value).length;
    let goodCount = (this.reviewForm.get(['goodreviews']).value).length;
    for(let i=0; i<goodCount;i++){
      let vars = this.reviewForm.get(['goodreviews',i]).get(['goodreview']).value;
      let value = vars;
      this.review.good.push(value);
    }
    for(let i=0; i<badCount;i++){
      let vars = this.reviewForm.get(['badreviews',i]).get(['badreview']).value;
      let value = vars;
      this.review.bad.push(value);
    }

  this.review.organizationid = localStorage.getItem("mytoken");
    this.review.empid = this.dat;
    this._emp.addEmployerReview(this.review).subscribe(data=>{
      this.msg = "Added Successfully";

        this.review = this._emp.emptyReview();

        this.route.navigate(["employee/detail", this.dat])
      },
      error=>{

      });
  }

}
