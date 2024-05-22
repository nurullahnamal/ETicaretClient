import { Injectable } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { ComponentType } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DialogService{

  constructor(private dialog: MatDialog) { }

  openDialog(daialogParameters:Partial <DialogParameters>): void {
    const dialogRef = this.dialog.open(daialogParameters.componentType, {
      width: daialogParameters.options?.witdh,
      height: daialogParameters.options?.height,
      position: daialogParameters.options?.position,
      data: daialogParameters.data,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == daialogParameters.data)
        daialogParameters.afterClosed();
    });
  }
}

export class DialogParameters{
componentType:ComponentType<any>;
data:any;
afterClosed:()=>void;
options?:Partial<DialogOptions> =new DialogOptions();
}
export class DialogOptions{
  witdh?:string="250px";
  height?:string;
  position?:DialogPosition;
}
