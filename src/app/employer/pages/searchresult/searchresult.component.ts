import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { Searchresult } from '../../models/searchresult'
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {
  dataArray : Searchresult[]=[{
    organization_name : "",
    address : "",
    contact : [""],
    employeeCapacity : null,
    photos : "",
    email : ""
  }];
  dat : any;
  msg = "";
  data : any;
  constructor(private _emp : SearchService,
              private _router : Router,
              private _route : ActivatedRoute) { }

  result : string;

  ngOnInit(): void {
    this._route.paramMap.subscribe(
      (params : ParamMap)=>{
        let name = params.get('name');
        this.dat = name===null?"Tapan Garments":name;
        this._emp.findEmployer(this.dat).subscribe(result=>{
            this.data = result;
            for(let i=0; i<this.data.detail.length;i++)
            {
              if(i==0){
                this.dataArray.pop();
              }
              let record : Searchresult={
                organization_name : this.data.detail[i].organization_name,
                address : this.data.detail[i].address.city,
                contact : this.data.detail[i].contact,
                employeeCapacity : this.data.detail[i].employeeCapacity,
                photos : this.data.detail[i].photos,
                email : this.data.detail[i].email
              };
              this.dataArray.push(record);
            }
          },
          err=>{
            this.msg = "Check the spelling";
          });
      })

  }
  details(emailId : string){
    this._router.navigate(["employer/detail", emailId]);
  }

}
