import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-reviewreceived',
  templateUrl: './reviewreceived.component.html',
  styleUrls: ['./reviewreceived.component.scss']
})
export class ReviewreceivedComponent implements OnInit {
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
  constructor(private  _search : SearchService) { }

  ngOnInit(): void {
    let email : string = localStorage.getItem("mytoken");
    this._search.reviewreceivedfromemployee(email).subscribe(data=>{

        this._search.reviewreceivedfromemployer(email).subscribe(data1=>{

            let empReview = data['detail'];
            let orgreview = data1['detail'];
            this.employee = empReview;
            this.employer = orgreview;
      },
        error => {

        })
    },
      error => {

      })
  }

}
