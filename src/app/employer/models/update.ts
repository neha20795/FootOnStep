import { Address } from '../../models/address';

export interface Update {
  organization_name : string,
  certification_type : string,
  director : string[],
  ceo : string,
  address : Address,
  contact : string[],
  employeeCapacity : number,
  safetyRating : number,
}
// organization_name : '',
//   certification_type :'' ,
//   director : [''],
//   ceo :'' ,
//   address : {
//   house_no : null,
//     street : '',
//     town : '',
//     city : '',
//     state :'' ,
//     country : '',
//     pincode : null
// },
//   contact : [''],
//   employeeCapacity : null,
//   safetyRating : null,
