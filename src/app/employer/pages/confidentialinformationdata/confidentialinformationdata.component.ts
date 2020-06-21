import { Component, OnInit } from '@angular/core';
import { ConfidentialinformationService } from '../../services/confidentialinformation.service';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";


@Component({
  selector: 'app-confidentialinformationdata',
  templateUrl: './confidentialinformationdata.component.html',
  styleUrls: ['./confidentialinformationdata.component.scss']
})
export class ConfidentialinformationdataComponent implements OnInit {

  constructor(private _conf : ConfidentialinformationService,private _router : Router,
              private _route : ActivatedRoute) { }

              information : any;
  maininformation : any;
  ngOnInit(): void {
    this._route.paramMap.subscribe((params : ParamMap)=>{
      let name = params.get('id');
      this._conf.getConfidentialInformationDetail(name).subscribe(
        data=>{

          this.information = data['detail'].information;
          this.maininformation = data['detail'].maininformation;
        },
        error => {

        }
      )

    })
  }
  remove(id :string){
    this._conf.removeConfidentialInformationRequest(id).subscribe(data=>{

      this._router.navigate(["/"]);
    },
      error => {

      });
  }
}
