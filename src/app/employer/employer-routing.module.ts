import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployerComponent } from './employer.component';
import {SearchresultComponent} from "./pages/searchresult/searchresult.component";
import {AddreviewbyemployeeComponent} from "./pages/addreviewbyemployee/addreviewbyemployee.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {ReviewgivenComponent} from "./pages/reviewgiven/reviewgiven.component";
import {UpdatedetailsComponent} from "./updatedetails/updatedetails.component";
import {ReviewreceivedComponent} from "./pages/reviewreceived/reviewreceived.component";
import {AddmoreComponent} from "./pages/addmore/addmore.component";
import {ConfidentialinformationComponent} from "./pages/confidentialinformation/confidentialinformation.component";
import {AddconfidentialinformationComponent} from "./pages/addconfidentialinformation/addconfidentialinformation.component";

import {ConfidentialinformationdataComponent} from "./pages/confidentialinformationdata/confidentialinformationdata.component";
import {UpdatemoreComponent} from "./pages/updatemore/updatemore.component";
import {EmpGuard} from "../guards/emp.guard";
import {EmployeeloginGuard} from "../guards/employeelogin.guard";
import {EmployerloginGuard} from "../guards/employerlogin.guard";


const routes: Routes = [
  {
    path: '',
    component: EmployerComponent
  },
  {
    path: 'search/:name',
    component : SearchresultComponent,
    pathMatch : "full"
  },
  {
    path : 'addreviewbyemployee/:id',
    canActivate : [EmployeeloginGuard],
    component : AddreviewbyemployeeComponent,
    pathMatch : "full"
  },
  {
    path : 'detail/:emailId',
    canActivate : [EmpGuard],
    component : DetailComponent,
    pathMatch : "full"
  },
  {
    path : 'reviewbyyou',
    canActivate : [EmployerloginGuard],
    component : ReviewgivenComponent
  },
  {
    path : 'updatedetail',
    canActivate : [EmployerloginGuard],
    component : UpdatedetailsComponent
  },
  {
    path : 'reviewforyou',
    canActivate : [EmployerloginGuard],
    component : ReviewreceivedComponent
  },
  {
    path : 'addmore',
    canActivate : [EmployerloginGuard],
    component : AddmoreComponent
  },
  {
    path : 'confidentialinformation',
    canActivate : [EmployerloginGuard],
    component : ConfidentialinformationComponent
  },
  {
    path : 'addconfidentialinformation/:id',
    canActivate : [EmployerloginGuard],
    component : AddconfidentialinformationComponent
  },
  {
    path : 'showmore',
    canActivate : [EmployerloginGuard],
    component : UpdatemoreComponent
  },
  {
    path : 'confidentialdata/:id',
    canActivate : [EmployerloginGuard],
    component : ConfidentialinformationdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
