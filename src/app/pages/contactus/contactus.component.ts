import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(private _contact : GalleryService, private _router : Router ) { }
  contact : any= {
    email : '',
    mobile : '',
    purpose : '',
    detail : ''
  }
  ngOnInit(): void {
  }
  send(){
    this._contact.contactus(this.contact).subscribe(data=>{
      this._router.navigate(["/home"]);
    },
      error => {
      })
  }
}
