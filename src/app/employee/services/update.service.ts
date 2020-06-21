import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Update} from '../models/update';
import {Addmore} from '../models/addmore';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private __http: HttpClient) {
  }

  updateData(email: string) {
    return this.__http.get("http://localhost:3000/update/" + email);
  }

  updatedData(email: string, data: Update) {

    return this.__http.post("http://localhost:3000/update/" + email, data);
  }

  addmore(information: Addmore) {
    return this.__http.post("http://localhost:3000/addmore", information);
  }

  getmore(employeeid: string) {
    return this.__http.get("http://localhost:3000/addmore/" + employeeid);
  }

  updatemore(data: any) {
    return this.__http.put("http://localhost:3000/addmore", data);
  }
}
