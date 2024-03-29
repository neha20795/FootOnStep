import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchData : string;
  constructor(private _router : Router) { }

  ngOnInit(): void {
  }
  searchInfo(searchname : string){
    this.searchData = searchname;
    this._router.navigate(["employer/search", searchname]);
  }
}
