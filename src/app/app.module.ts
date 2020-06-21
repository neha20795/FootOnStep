import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HowweworkComponent } from './pages/howwework/howwework.component';
import { FooterheadComponent } from './pages/footerhead/footerhead.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './sharedcomponent/login/login.component';
import { LoginuiComponent } from './sharedcomponent/loginui/loginui.component';
import { EmployeesignupComponent } from './sharedcomponent/employeesignup/employeesignup.component';
import { EmployersignupComponent } from './sharedcomponent/employersignup/employersignup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ImagegalleryComponent } from './pages/imagegallery/imagegallery.component';
import { ForgetpasswordComponent } from './sharedcomponent/forgetpassword/forgetpassword.component';
import {ChangepasswordComponent} from "./pages/changepassword/changepassword.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HowweworkComponent,
    FooterheadComponent,
    ContactusComponent,
    DashboardComponent,
    LoginComponent,
    LoginuiComponent,
    EmployeesignupComponent,
    EmployersignupComponent,
    PagenotfoundComponent,
    ImagegalleryComponent,
    ForgetpasswordComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
