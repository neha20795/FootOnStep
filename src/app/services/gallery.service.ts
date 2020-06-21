import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Gallery } from '../models/gallery';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private _http : HttpClient) { }
  fileUploadEmployee(data){
    return this._http.post<any>("http://localhost:3000/imageupload", data);
  }
  fileUploadEmployer(data){
    return this._http.post<any>("http://localhost:3000/imageupload/empr", data);
  }
  addImageEmployee(email : string, data : Gallery){
    return this._http.post("http://localhost:3000/addimage/"+email, data);
  }
  addImageEmployer(email : string, data : Gallery){
    return this._http.post("http://localhost:3000/employer/addimage/"+email, data);
  }
  contactus(information : any){
    return this._http.post("http://localhost:3000/contactus", information);

  }
}
