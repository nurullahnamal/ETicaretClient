import { Component, OnInit } from '@angular/core';

import { AlertifyOptions, AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit{
  constructor(private alertify: AlertifyService){}

  ngOnInit(): void {
  }

  m(){
    this.alertify.message("merhaba",{
      messageType:MessageType.Success,
      delay:4,
      position:Position.BottomRight,
      dismissOthers:false

    })
  }

  d(){
    this.alertify.dismiss();
  }
}
