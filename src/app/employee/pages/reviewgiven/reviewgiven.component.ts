import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Reviewgiven } from '../../models/reviewgiven';
@Component({
  selector: 'app-reviewgiven',
  templateUrl: './reviewgiven.component.html',
  styleUrls: ['./reviewgiven.component.scss']
})
export class ReviewgivenComponent implements OnInit {
// review : Reviewgiven[] =[
//   {
//     employee : [{
//       good: [''],
//       bad: [''],
//       positon: '',
//       rating: null,
//       empidreciever: ''
//     }],
//     employer : [{
//       orgid: '',
//       pros: [''],
//       cons: [''],
//       rating: null,
//       type: ''
//     }]
//   }
// ]
  review : Reviewgiven[];
  employee :any = [{
      good: [''],
      bad: [''],
      positon: '',
      rating: null,
      empidreciever: ''
    }];
    employer :any = [{
      orgid: '',
      pros: [''],
      cons: [''],
      rating: null,
      type: ''
    }];
  constructor(private _search : SearchService) { }

  ngOnInit(): void {
  let email : string = localStorage.getItem("mytoken");
  this._search.reviewgiventoemployee(email).subscribe(data=>{

    this._search.reviewgiventoemployer(email).subscribe(data2=>{

      let empReview = data['detail'];
      let orgreview = data2['detail'];
      this.employee = empReview;
        this.employer = orgreview;

      },
      error => {

      })
    //
  },
    error => {

    })
  }

}
