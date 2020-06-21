import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormArray} from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EmployerService } from '../../services/employer.service';
import { EmpimageformService} from '../../services/empimageform.service'
import { EmployerimageuploadService } from '../../services/employerimageupload.service';
import { Employer } from '../../models/employer';
@Component({
  selector: 'app-employersignup',
  templateUrl: './employersignup.component.html',
  styleUrls: ['./employersignup.component.scss']
})
export class EmployersignupComponent implements OnInit {

  empForm:FormGroup;
  constructor(private _emp : EmployerService,
              private route: Router,
              private _form : EmpimageformService,
              private _upload : EmployerimageuploadService,
              private fb:FormBuilder) {
    this.empForm=this.fb.group({
      mobiles: this.fb.array([]) ,
      directors : this.fb.array([]) ,
    })
  }
  emp : Employer={
    organization_name : "", registration_date : null, certification_type : "", director : [""], ceo : "", email : "", password : "",
    address : {house_no : null, street : "", town : "", city : "", state : "", country : "", pincode : null},
    contact : [""], employeeCapacity : null, safetyRating : null, photos : [""]
  };
  form : any;
  message : any;
  myForm : FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      organization_name :['', Validators.required],
      registration_date : null,
      certification_type : ['', Validators.required],
      director : ['', Validators.required],
      ceo : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      house_no : ['', Validators.required],
      street : ['', Validators.required],
      town : ['', Validators.required],
      city : ['', Validators.required],
      state :['', Validators.required],
      country :['', Validators.required],
      pincode : ['', Validators.required],
      contact : ['', Validators.required],
      employeeCapacity :['', Validators.required],
      safetyRating : ['', Validators.required],
    });
  }
  upload(fileArr){
    this.form = this._form.uploadFormCreate(fileArr[0], "image");
  }
  mobiles(): FormArray {
    return this.empForm.get("mobiles") as FormArray
  }
  newMobile(): FormGroup {
    return this.fb.group({
      mobile: ''
    })
  }
  addMobile() {
    this.mobiles().push(this.newMobile());
  }
  removeMobile(mobIndex:number) {
    this.mobiles().removeAt(mobIndex);
  }
  directors(): FormArray {
    return this.empForm.get("directors") as FormArray
  }
  newDirector(): FormGroup {
    return this.fb.group({
      Director: ''
    })
  }
  addDirector() {
    this.directors().push(this.newDirector());
  }
  removeDirector(dirIndex:number) {
    this.directors().removeAt(dirIndex);
  }
  add(){
    this.submitted = true;
    if(this.myForm.invalid){
      return;
    }
      this.emp.organization_name = this.myForm.controls['organization_name'].value;
      this.emp.registration_date = this.myForm.controls['registration_date'].value;
      this.emp.certification_type = this.myForm.controls['certification_type'].value;
      this.emp.director[0] = this.myForm.controls['director'].value;
      this.emp.ceo = this.myForm.controls['ceo'].value;
      this.emp.email = this.myForm.controls['email'].value;
      this.emp.password = this.myForm.controls['password'].value;
      this.emp.address.house_no = this.myForm.controls['house_no'].value;
      this.emp.address.street = this.myForm.controls['street'].value;
      this.emp.address.town = this.myForm.controls['town'].value;
      this.emp.address.city = this.myForm.controls['city'].value;
      this.emp.address.state = this.myForm.controls['state'].value;
      this.emp.address.country = this.myForm.controls['country'].value;
      this.emp.address.pincode = this.myForm.controls['pincode'].value;
      this.emp.contact[0] = this.myForm.controls['contact'].value;
      this.emp.employeeCapacity = this.myForm.controls['employeeCapacity'].value;
      this.emp.safetyRating = this.myForm.controls['safetyRating'].value;


    let le = (this.empForm.get(['mobiles']).value).length;
    let dl = (this.empForm.get(['directors']).value).length;
    this._upload.fileUpload(this.form).subscribe(data=>{
      this.emp.photos[0] = data.name;
      for(let i=0; i<le;i++){
        let vars = this.empForm.get(['mobiles',i]).get(['mobile']).value;
        let value = vars;
        this.emp.contact.push(value);
      }
      for(let i=0; i<dl;i++){
        let vars = this.empForm.get(['directors',i]).get(['Director']).value;
        let value = vars;
        this.emp.director.push(value);
      }
      this._emp.addEmployer(this.emp).subscribe(data=>{
        localStorage.setItem("signupid", this.emp.email);
          let myurl = "/employer/addmore";
          this.route.navigateByUrl(myurl).then(e => {
            if (e) {
              this.emp = this._emp.emptyEmployeer();
            } else {
            }
          });
        },
        error=>{
          this.message = error.error.msg;
        });
    },err=>{
    });
  }
}
