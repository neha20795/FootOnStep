import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { GalleryService } from '../../services/gallery.service';
import { EmpimageformService } from '../../services/empimageform.service';
import {Router} from "@angular/router";
import { ImageurlService } from '../../services/imageurl.service';
@Component({
  selector: 'app-imagegallery',
  templateUrl: './imagegallery.component.html',
  styleUrls: ['./imagegallery.component.scss']
})
export class ImagegalleryComponent implements OnInit {

  image : string;
  email : string;
  constructor(private _gallery : GalleryService,
              private route: Router,
              private _form : EmpimageformService,
              private _img : ImageurlService
  ) { }
  val : string;
  imageArray : any[];
  url : string;
  count = 1;
  total : number;
  ngOnInit(): void {
    this.val = localStorage.getItem("Usertype");
    this.email = localStorage.getItem("mytoken");
    if(this.val=='employee')
    {
      this._img.imageEmployee(this.email).subscribe(data=>{
        this.imageArray = data['detail'];
        this.url = this.imageArray[0];
          this.total = data['detail'].length -1;
        },
        error => {
        })
    }
    else if(this.val=='employer')
    {
      this._img.imageEmployer(this.email).subscribe(data=>{
          this.imageArray = data['detail'];
          this.total = data['detail'].length -1;
          this.url = this.imageArray[0];
        },
        error => {
        })
    }
  }
  form : any;
  upload(fileArr){
    this.form = this._form.uploadFormCreate(fileArr[0], "image");
  }
  add(){
    if(this.val=='employee')
    {
      this._gallery.fileUploadEmployee(this.form).subscribe(data=>{
          this.image = data['name'];
          // service call for image update
          let imageinfo : Gallery = {
            image : this.image
          }
          this._gallery.addImageEmployee(this.email, imageinfo).subscribe(data=>{
              this.route.navigate(["/"]);
            },
            error => {
            })
        },
        error => {
        })
    }
    else if(this.val=='employer'){
      this._gallery.fileUploadEmployer(this.form).subscribe(data=>{
          this.image = data['name'];
          let imageinfo : Gallery = {
            image : this.image
          }
          this._gallery.addImageEmployer(this.email, imageinfo).subscribe(data=>{
              this.route.navigate(["/"]);

            },
            error => {
            }
          )
          // service call for image update
        },
        error => {
        })
    }
  }
  next(){
    this.url = this.imageArray[this.count];
    if(this.count==this.total){
      this.count =0;
    }
    else {
      this.count++;
    }
  }
  previous(){
    this.url = this.imageArray[this.count];
    if(this.count==0){
      this.count = this.total;
    }
    else{
      this.count--;
    }
  }
}
