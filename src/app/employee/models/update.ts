import { Address } from '../../models/address';
export interface Update {
  fname : string;
  lname : string;
  // dob : Date;
  // email : string;
  // password : string;
  address : Address;
  mobile : string[];
  organization : string;
  qualification : string;
  experience : number;
  gender : any;
  // image : string;
}
