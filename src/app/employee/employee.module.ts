import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { SearchComponent } from './pages/search/search.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ImageviewComponent } from './pages/imageview/imageview.component';
import { AddreviewbyemployeeComponent } from './pages/addreviewbyemployee/addreviewbyemployee.component';
import { AddreviewbyemployerComponent } from './pages/addreviewbyemployer/addreviewbyemployer.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { ReviewreceivedComponent } from './pages/reviewreceived/reviewreceived.component';
import { ReviewgivenComponent } from './pages/reviewgiven/reviewgiven.component';
import { ConfidentialinformationrequestComponent } from './pages/confidentialinformationrequest/confidentialinformationrequest.component';
import { AddmoreComponent } from './pages/addmore/addmore.component';
import { ConfkeepComponent } from './pages/confkeep/confkeep.component';
import { ConfidentialinformationComponent } from './pages/confidentialinformation/confidentialinformation.component';
import { UpdatemoreComponent } from './pages/updatemore/updatemore.component';
import { DetailreviewComponent } from './pages/detailreview/detailreview.component';



@NgModule({
    declarations: [EmployeeComponent, SearchresultComponent, SearchComponent, DetailComponent, ImageviewComponent, AddreviewbyemployeeComponent, AddreviewbyemployerComponent, UpdatedetailsComponent, ReviewreceivedComponent, ReviewgivenComponent, ConfidentialinformationrequestComponent, AddmoreComponent, ConfkeepComponent, ConfidentialinformationComponent, UpdatemoreComponent, DetailreviewComponent, ],
    exports: [

    ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class EmployeeModule { }
