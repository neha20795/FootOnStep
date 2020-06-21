import { Addreviewbyemployee } from '../models/addreviewbyemployee';
export interface Reviewgiven {
  employee : [{
    good: string[],
    bad: string[],
    positon: string,
    rating: number,
    empidreciever: string
  }],
  employer : [{
    orgid: string,
    pros: string[],
    cons: string[],
    rating: number,
    type: string
  }]
}
// employee : [{
//   good: [''],
//   bad: [''],
//   positon: '',
//   rating: null,
//   empidreciever: ''
// }],
//   employer : [{
//   orgid: '',
//   pros: [''],
//   cons: [''],
//   rating: null,
//   type: ''
// }]
