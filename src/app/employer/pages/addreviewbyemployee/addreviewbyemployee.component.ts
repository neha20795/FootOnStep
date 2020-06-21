import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormArray} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Addreviewbyemployee } from '../../models/addreviewbyemployee';
import { EmployeetoemployerService } from '../../services/employeetoemployer.service';

@Component({
  selector: 'app-addreviewbyemployee',
  templateUrl: './addreviewbyemployee.component.html',
  styleUrls: ['./addreviewbyemployee.component.scss']
})
export class AddreviewbyemployeeComponent implements OnInit {

  reviewForm:FormGroup;
  constructor(
    private _emp : EmployeetoemployerService,
    private route: Router,
    private _route : ActivatedRoute,
    private fb:FormBuilder,
    ) {
    this.reviewForm=this.fb.group({
      goodreviews: this.fb.array([]) ,
      badreviews: this.fb.array([]) ,
    })
  }
  review : Addreviewbyemployee={
    empid : "",
    orgid : "",
    pros : [""],
    cons : [""],
    rating: null,
    type : ""
  };
  dat : string;
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
  add(){

    let badCount = (this.reviewForm.get(['badreviews']).value).length;
    let goodCount = (this.reviewForm.get(['goodreviews']).value).length;
    for(let i=0; i<goodCount;i++){
      let vars = this.reviewForm.get(['goodreviews',i]).get(['goodreview']).value;
      let value = vars;
      this.review.pros.push(value);

    }
    for(let i=0; i<badCount;i++){
      let vars = this.reviewForm.get(['badreviews',i]).get(['badreview']).value;
      let value = vars;
      this.review.cons.push(value);

    }

    this.review.orgid = this.dat;
    this.review.empid = localStorage.getItem("mytoken");
    this._emp.addEmployeeReview(this.review).subscribe(data=>{

        this.review = this._emp.emptyReview();
        this.route.navigate(["employer/detail", this.dat])

        // let myurl = "/employer";
        // this.route.navigateByUrl(myurl).then(e => {
        //   if (e) {
        //
        //   } else {
        //
        //   }
        // });
      },
      error=>{

      });
  }




}
