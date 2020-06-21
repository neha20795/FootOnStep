import {Component, Input, OnInit} from '@angular/core';
import { UpdateService } from '../../services/update.service';
import { Addmore } from '../../models/addmore';

@Component({
  selector: 'app-imageview',
  templateUrl: './imageview.component.html',
  styleUrls: ['./imageview.component.scss']
})
export class ImageviewComponent implements OnInit {
  @Input() id : string;
  @Input() name : string;
  url : string = "mongo.png";
  information : Addmore;
  constructor(private _update :  UpdateService) { }

  ngOnInit(): void {
    this.url = this.id;
    this._update.getmore(this.name).subscribe(
      data=>{
        this.information = data['detail'];
      },
      error => {
      }
    );
  }

}
