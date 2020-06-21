import { Component, OnInit } from '@angular/core';
import {ConfidentialinformationService} from "../../services/confidentialinformation.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-addconfidentialinformation',
  templateUrl: './addconfidentialinformation.component.html',
  styleUrls: ['./addconfidentialinformation.component.scss']
})
export class AddconfidentialinformationComponent implements OnInit {
information : any={
  confidentialid : '',
  avoidGossip : '',
  teamPlayer : '',
  communicatesWell : '',
  disciplined : '',
  punctual : '',
  drivenToSucceed : '',
  readilyAdaptable : '',
  hasInitiative : '',
  ForthrightandHonest : '',
  canLead : '',
  detailOriented : '',
  energeticandEnthusiastic : '',
  welcomesChallenges : '',
  remainsOptimistic : '',
  goesAboveandBeyond : '',
  dependable : '',
  strongWorkethic : '',
  getsthingsDoneOnTime : '',
  constantlyImprovingtheirSkills : '',
  putsinNecessaryhHours : '',
  professional : '',
  canprioritizeAndOrganize : '',
  respectsoOthers : '',
  overcomesObstacles : '',
  followsTrends : '',
  reliableandResponsible : '',
  activelySupportsCompanyGoals : '',
  involvedWithCompanyEvents : '',
  groundedandHumble : '',
  inspiresOthers : '',
  providesFreshideas  : '',
  personalValuesAlignwithCompanyValues : '',
  personable : '',
  handlesPressureWell : '',
  marketableforClients : '',
  attentiveListener : '',
  motivatesOthers : '',
  takesResponsibility : '',
  variesTasksWillingly : '',
  relatable : '',
  articulate : '',
  mentionsConcerns : '',
  appreciatesConstructiveCriticism : '',
  Techsavvy : '',
  Quickadaptationtorole : '',
  interactseffectively : '',
  abletovaryrole : '',
  bendsOverBackward : '',
  speakstheirMind : '',
  justnice : '',
};
maininformation : any ={
  confidentialid : '',
  dateOfJoining : null,
  dateOfLeaving : null,
  initialSalary : null,
  currentSalary : null,
  reasonToLeave : ''
};
message : string;
  constructor(private _conf : ConfidentialinformationService,
              private  _router : Router,
              private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      let name = params.get('id');
      this.information.confidentialid = name;
      this.maininformation.confidentialid = name;
    });
  }
  add(){
    let detail = {
      information : this.information,
      maininformation : this.maininformation
    }
    this._conf.addConfidentialInformation(detail).subscribe(data=>{

      this._router.navigate(["/"]);

    },
      error => {

      });
  }

}
