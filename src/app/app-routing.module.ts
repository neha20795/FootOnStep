import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {EmployeesignupComponent} from "./sharedcomponent/employeesignup/employeesignup.component";
import {EmployersignupComponent} from "./sharedcomponent/employersignup/employersignup.component";
import {LoginComponent} from "./sharedcomponent/login/login.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {ContactusComponent} from "./pages/contactus/contactus.component";
import {ImagegalleryComponent} from "./pages/imagegallery/imagegallery.component";
import {ChangepasswordComponent} from "./pages/changepassword/changepassword.component";
import {EmpGuard} from "./guards/emp.guard";
import {ForgetpasswordComponent} from "./sharedcomponent/forgetpassword/forgetpassword.component";



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "contactus",
    component : ContactusComponent
  },
  {
    path : "employeeregistration",
    component : EmployeesignupComponent
  },
  {
    path : "employerregistration",
    component : EmployersignupComponent
  },
  {
    path : "employeelogin",
    component : LoginComponent
  },
  {
    path : 'uploadimages',
    canActivate : [EmpGuard],
    component : ImagegalleryComponent
  },
  {
    path : "changepassword",
    canActivate : [EmpGuard],
    component : ChangepasswordComponent
  },
  {
    path : 'forgetpassword/:compname',
    component : ForgetpasswordComponent,
    pathMatch : "full"
  },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'employer', loadChildren: () => import('./employer/employer.module').then(m => m.EmployerModule) },
  // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  {
    path : '**',
    component : PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
