import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { Searchresult } from '../../models/searchresult';
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {
  dataArray : Searchresult[]=[{
    email : '',
    imageurl : '',
    fname : '',
    lname : '',
    gender :  '',
    address : '',
    organization : ''
  }];
  dat : any;
  msg = "";
  data : any;
  result : string;
  constructor(private _emp : SearchService,
              private _router : Router,
              private _route : ActivatedRoute,) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(
      (params : ParamMap)=>{
        let name = params.get('name');
        this.dat = name===null?"Neha":name;
      })
    this._emp.findEmployee(this.dat).subscribe(result=>{
        this.data = result;
        for(let i=0; i<this.data.detail.length;i++)
        {
          if(i==0){
            this.dataArray.pop();
          }
          let record : Searchresult={
            fname : this.data.detail[i].fname,
            lname : this.data.detail[i].lname,
            organization : this.data.detail[i].organization,
            email : this.data.detail[i].email,
            gender : this.data.detail[i].gender=="F"?"Female":"Male",
            address : this.data.detail[i].address['city'],
            imageurl : this.data.detail[i].image[0]
          };
          this.dataArray.push(record);
        }
      },
      err=>{
        this.msg = "Check the spelling";
      });
  }
  details(e : string){
    this._router.navigate(["employee/detail", e]);
  }

}
