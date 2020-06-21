import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-reviewgiven',
  templateUrl: './reviewgiven.component.html',
  styleUrls: ['./reviewgiven.component.scss']
})
export class ReviewgivenComponent implements OnInit {
  employee :any = [{
    good: [''],
    bad: [''],
    positon: '',
    rating: null,
    empid: '',
    review : ['']
  }];
  constructor(private _search : SearchService) { }

  ngOnInit(): void {
    let email : string = localStorage.getItem("mytoken");
    this._search.reviewgiventoemployee(email).subscribe(data=>{
        let empReview = data['detail'];
        this.employee = empReview;
         
      },
      error => {
      });
  }
}
/*
* Fetch data from employee to employee
* Fetch from employee to employer
* */
