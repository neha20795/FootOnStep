import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfidentialinformationService {

  constructor(private __http : HttpClient) { }

  confidentialRequestSent(email : string){
    return this.__http.get("http://localhost:3000/confidentialinformation/"+email);
  }
  confidentialRequestRecieved(email : string){
    return this.__http.get("http://localhost:3000/confidentialinformation/employertwo/"+email);
  }
  confidentialRequestEmployerAccept(information : any){
    return this.__http.put<any>(`http://localhost:3000/confidentialinformation/employertwo/update`, information);
  }
  cofidentialRequestAccepted(email : string){
    return this.__http.get("http://localhost:3000/confidentialinformation/accepted/"+email);
  }
  infoRemove(id : string){
    return this.__http.delete("http://localhost:3000/confidentialinformation/remove/"+id);
  }
  addConfidentialInformation(data : any){
    return this.__http.post("http://localhost:3000/confidentialinformation/addconfidentialinformation", data);
  }
  removeConfidentialInformationRequest(id : string){
    return this.__http.delete("http://localhost:3000/confidentialinformation/removerequest/"+id);
  }
 getConfidentialInformationDetail(id : string){
   return this.__http.get("http://localhost:3000/confidentialinformation/detail/"+id);
 }
 updateEmployerTwoStatus(data : any){
   return this.__http.put<any>(`http://localhost:3000/confidentialinformation/employertwo`, data);
 }
}
