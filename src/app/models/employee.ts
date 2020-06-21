import { Address } from '../models/address';
export interface Employee {
  fname : string;
  lname : string;
  dob : Date;
  email : string;
  password : string;
  address : Address;
  mobile : string[];
  organization : string;
  qualification : number;
  experience : number;
  gender : any;
  image : string[];
}
