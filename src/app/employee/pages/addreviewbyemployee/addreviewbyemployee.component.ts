import { Component, OnInit } from '@angular/core';
import { Addreviewbyemployee } from '../../models/addreviewbyemployee';
import { EmployeetoemployeeService } from '../../services/employeetoemployee.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { FormControl, FormArray} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-addreviewbyemployee',
  templateUrl: './addreviewbyemployee.component.html',
  styleUrls: ['./addreviewbyemployee.component.scss']
})
export class AddreviewbyemployeeComponent implements OnInit {
  reviewForm:FormGroup;
  constructor(
    private _emp : EmployeetoemployeeService,
    private route: Router,
    private _route : ActivatedRoute,
    private fb:FormBuilder
  ) {
    this.reviewForm=this.fb.group({
      goodreviews: this.fb.array([]) ,
      badreviews: this.fb.array([]) ,
    })
  }
  review : Addreviewbyemployee={
    empidgiver : "",
    good : [""],
    bad :[""],
    positon : "",
    rating : null,
    empidreciever : ""
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
    this.review.empidreciever = this.dat;
    this.review.empidgiver = localStorage.getItem("mytoken");
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
    this._emp.addReview(this.review).subscribe(data=>{
        this.msg = "Added Successfully";

        this.review = this._emp.emptyReview();
        let myurl = "employee";
        let e = this.dat;
        this.route.navigate(["employee/detail", this.dat])
      },
      error=>{

      });
  }
}
