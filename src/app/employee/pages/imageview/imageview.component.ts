import {Component, Input, OnInit} from '@angular/core';
import { UpdateService } from '../../services/update.service';
import {Addmore } from '../../models/addmore';
@Component({
  selector: 'app-imageview',
  templateUrl: './imageview.component.html',
  styleUrls: ['./imageview.component.scss']
})
export class ImageviewComponent implements OnInit {
  @Input() id : string;
  @Input() email : string;
  url : string = "avatar.jpg";
  information : any;
  constructor(private _more : UpdateService) { }

  ngOnInit(): void {
    this.url = this.id;

    this._more.getmore(this.email).subscribe(
      data=>{

        this.information = data['detail'];
      },
      error => {

      }
    )
  }


}
