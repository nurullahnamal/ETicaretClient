import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
declare var alertify:any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {
  }
}
