import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerComponent } from './employer.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ImageviewComponent } from './pages/imageview/imageview.component';
import { AddreviewbyemployeeComponent } from './pages/addreviewbyemployee/addreviewbyemployee.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { ReviewreceivedComponent } from './pages/reviewreceived/reviewreceived.component';
import { ReviewgivenComponent } from './pages/reviewgiven/reviewgiven.component';
import { ConfidentialinformationComponent } from './pages/confidentialinformation/confidentialinformation.component';
import { ConfidentialinformationsentComponent } from './pages/confidentialinformationsent/confidentialinformationsent.component';
import { ConfidentialinformationreceivedComponent } from './pages/confidentialinformationreceived/confidentialinformationreceived.component';
import { ConfidentialinformationacceptedComponent } from './pages/confidentialinformationaccepted/confidentialinformationaccepted.component';
import { AddmoreComponent } from './pages/addmore/addmore.component';
import { AddconfidentialinformationComponent } from './pages/addconfidentialinformation/addconfidentialinformation.component';
import { UpdatemoreComponent } from './pages/updatemore/updatemore.component';
import { ConfidentialinformationdataComponent } from './pages/confidentialinformationdata/confidentialinformationdata.component';
import { DetailreviewComponent } from './pages/detailreview/detailreview.component';


@NgModule({
  declarations: [EmployerComponent, SearchComponent, SearchresultComponent, DetailComponent, ImageviewComponent, AddreviewbyemployeeComponent, UpdatedetailsComponent, ReviewreceivedComponent, ReviewgivenComponent, ConfidentialinformationComponent, ConfidentialinformationsentComponent, ConfidentialinformationreceivedComponent, ConfidentialinformationacceptedComponent, AddmoreComponent, AddconfidentialinformationComponent, UpdatemoreComponent, ConfidentialinformationdataComponent, DetailreviewComponent],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployerModule { }
