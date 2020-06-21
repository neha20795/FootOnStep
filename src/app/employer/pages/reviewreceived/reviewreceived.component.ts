import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-reviewreceived',
  templateUrl: './reviewreceived.component.html',
  styleUrls: ['./reviewreceived.component.scss']
})
export class ReviewreceivedComponent implements OnInit {
  employer :any = [{
    pros: [''],
    cons: [''],
    rating: null,
    type: ''
  }];
  constructor(private _search : SearchService) { }

  ngOnInit(): void {
    let email : string = localStorage.getItem("mytoken");
    this._search.reviewreceivedfromemployee(email).subscribe(
      data=>{
        let empReview = data['detail'];
        this.employer = empReview;

      },
      error => {
      }
    );
  }

}
