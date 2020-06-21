import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import  { SearchresultComponent } from './pages/searchresult/searchresult.component';
import {DetailComponent} from "./pages/detail/detail.component";
import {AddreviewbyemployeeComponent} from "./pages/addreviewbyemployee/addreviewbyemployee.component";
import {AddreviewbyemployerComponent} from "./pages/addreviewbyemployer/addreviewbyemployer.component";
import {ReviewgivenComponent} from "./pages/reviewgiven/reviewgiven.component";
import {UpdatedetailsComponent} from "./updatedetails/updatedetails.component";
import {ReviewreceivedComponent} from "./pages/reviewreceived/reviewreceived.component";
import {ConfidentialinformationrequestComponent} from "./pages/confidentialinformationrequest/confidentialinformationrequest.component";
import {AddmoreComponent} from "./pages/addmore/addmore.component";
import { UpdatemoreComponent } from './pages/updatemore/updatemore.component';
import {EmpGuard} from "../guards/emp.guard";
import {EmployeeloginGuard} from "../guards/employeelogin.guard";
import {EmployerloginGuard} from "../guards/employerlogin.guard";

const routes: Routes = [
    {
      path: '',
      component: EmployeeComponent
    },
    {
      path : 'search/:name',
      component : SearchresultComponent,
      pathMatch : "full"
    },
  {
    path : 'detail/:emailId',
    canActivate : [EmpGuard],
    component : DetailComponent,
    pathMatch : "full"
  },
  {
    path : 'reviewbyemployee/:id',
    canActivate : [EmployeeloginGuard],
    component : AddreviewbyemployeeComponent,
    pathMatch : "full"
  },
  {
    path : 'reviewbyemployer/:id',
    canActivate : [EmployerloginGuard],
    component : AddreviewbyemployerComponent,
    pathMatch : "full"
  },
  {
    path : 'reviewbyyou',
    canActivate : [EmployeeloginGuard],
    component : ReviewgivenComponent
  },
  {
    path : 'updatedetail',
    canActivate : [EmployeeloginGuard],
    component : UpdatedetailsComponent
  },
  {
    path : 'reviewforyou',
    canActivate : [EmployeeloginGuard],
    component : ReviewreceivedComponent
  },
  {
    path : 'confidentialinformation',
    canActivate : [EmployeeloginGuard],
    component : ConfidentialinformationrequestComponent
  },
  {
    path : 'addmore',
    canActivate : [EmployeeloginGuard],
    component : AddmoreComponent
  },
  {
    path : 'updatemore',
    canActivate : [EmployeeloginGuard],
    component : UpdatemoreComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
