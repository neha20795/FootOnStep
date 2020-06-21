import { Component, OnInit } from '@angular/core';
import { ImageurlService } from '../../services/imageurl.service';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
val : string;
email : string;
message : string;
  constructor( private _pass : ImageurlService,
               private _router : Router,
               private fb:FormBuilder) { }
information : any={
    email : "",
    oldpassword : "",
    newPassword : ""
}
  myForm : FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.val = localStorage.getItem("Usertype");
    this.email = localStorage.getItem("mytoken");
    this.myForm = this.fb.group({
      currentpassword :['', Validators.required],
      newpassword :['', Validators.required],
      retypenewpassword : ['', Validators.required],
    });
  }
  change(){
    this.submitted = true;
    if(this.myForm.invalid){
      return;
    }
    if(this.myForm.controls['newpassword'].value != this.myForm.controls['retypenewpassword'].value)
    {
      return;
    }
    this.information.email = this.email;
    this.information.oldpassword = this.myForm.controls['currentpassword'].value;
    this.information.newpassword = this.myForm.controls['newpassword'].value;


    if(this.val=='employee')
          {
            this._pass.changeEmployee(this.information).subscribe(data=>{
              localStorage.clear();
              this._router.navigate(["/home"]);
            },
              error => {
              }
            )
          }
          else if(this.val=='employer'){
            this._pass.changeEmployer(this.information).subscribe(data=>{
                localStorage.clear();
                this._router.navigate(["/home"]);
              },
              error => {
              }
            )
          }
  }
}
