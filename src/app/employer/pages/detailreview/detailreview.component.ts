import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-detailreview',
  templateUrl: './detailreview.component.html',
  styleUrls: ['./detailreview.component.scss']
})
export class DetailreviewComponent implements OnInit {
  @Input() username : string;
  employer :any = [{
    pros: [''],
    cons: [''],
    rating: null,
    type: ''
  }];

  constructor(private _search : SearchService) { }

  ngOnInit(): void {
    this._search.reviewreceivedfromemployee(this.username).subscribe(
      data=>{
        let empReview = data['detail'];
        this.employer = empReview;

      },
      error => {
      }
    );
  }
}
