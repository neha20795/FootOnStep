import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormArray} from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { EmpimageformService} from '../../services/empimageform.service'
import { EmployeeimageuploadService } from '../../services/employeeimageupload.service';


@Component({
  selector: 'app-employeesignup',
  templateUrl: './employeesignup.component.html',
  styleUrls: ['./employeesignup.component.scss']
})
export class EmployeesignupComponent implements OnInit {
  empForm:FormGroup;
  constructor(private _emp : EmployeeService,
              private route: Router,
              private _form : EmpimageformService,
              private _upload : EmployeeimageuploadService,
              private fb:FormBuilder) {
    this.empForm=this.fb.group({
      mobiles: this.fb.array([]) ,
    })
  }
  emp : Employee={
    fname : "", lname : "", dob : new Date(), email : "", password :"",
    address : {house_no : null, street : "", town : "", city : "", state : "", country : "", pincode : null},
    organization : "", qualification : 0, mobile: [""], experience : 0, gender : "", image : [""]
  };
  form : any;
  message : any;
  employers : string[];
  myForm : FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      fname :['', Validators.required],
      lname :['', Validators.required],
      dob : ['', Validators.required],
      email : ['', Validators.required],
      password :['', Validators.required],
      house_no : ['', Validators.required],
      street :['', Validators.required],
      town : ['', Validators.required],
      city : ['', Validators.required],
      state : ['', Validators.required],
      country : ['', Validators.required],
      pincode :['', Validators.required],
      organization : ['', Validators.required],
      qualification : ['', Validators.required],
      mobile: ['', Validators.required],
      experience : ['', Validators.required],
      gender : ['', Validators.required]
    });
    this._emp.getEmployers().subscribe(data=>{
      this.employers = data['detail'];
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
  removeEmployee(mobIndex:number) {
    this.mobiles().removeAt(mobIndex);
  }
  add(){
    this.submitted = true;
    if(this.myForm.invalid){
      return;
    }
    this.emp.fname = this.myForm.controls['fname'].value;
    this.emp.lname = this.myForm.controls['lname'].value;
    this.emp.dob = this.myForm.controls['dob'].value;
    this.emp.email = this.myForm.controls['email'].value;
    this.emp.password = this.myForm.controls['password'].value;
    this.emp.address.house_no = this.myForm.controls['house_no'].value;
    this.emp.address.street = this.myForm.controls['street'].value;
    this.emp.address.town = this.myForm.controls['town'].value;
    this.emp.address.city = this.myForm.controls['city'].value;
    this.emp.address.state = this.myForm.controls['state'].value;
    this.emp.address.country = this.myForm.controls['country'].value;
    this.emp.address.pincode = this.myForm.controls['pincode'].value;
    this.emp.organization = this.myForm.controls['organization'].value;
    this.emp.qualification = this.myForm.controls['qualification'].value;
    this.emp.mobile[0] = this.myForm.controls['mobile'].value;
    this.emp.experience = this.myForm.controls['experience'].value;
    this.emp.gender = this.myForm.controls['gender'].value;

    let le = (this.empForm.get(['mobiles']).value).length;
    this._upload.fileUpload(this.form).subscribe(data=>{
      this.emp.image[0] = data.name;
      for(let i=0; i<le;i++){
        let vars = this.empForm.get(['mobiles',i]).get(['mobile']).value;
        let value = vars;
        this.emp.mobile.push(value);
      }
      this._emp.addEmployee(this.emp).subscribe(data=>{
        localStorage.setItem("signupid", this.emp.email);
          let myurl = "/employee/addmore";
          this.route.navigateByUrl(myurl).then(e => {
            if (e) {
              this.emp = this._emp.emptyEmployee();
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
