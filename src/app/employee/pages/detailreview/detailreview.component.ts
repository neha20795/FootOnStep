import {Component, Input, OnInit} from '@angular/core';
import { SearchService } from '../../services/search.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-detailreview',
  templateUrl: './detailreview.component.html',
  styleUrls: ['./detailreview.component.scss']
})
export class DetailreviewComponent implements OnInit {
@Input() username:string;
msg : string;
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
  constructor(private _search : SearchService,
              private _router : Router) { }
  data : any;
  ngOnInit(): void {
    this._search.reviewreceivedfromemployee(this.username).subscribe(data=>{


        this._search.reviewreceivedfromemployer(this.username).subscribe(data1=>{

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
