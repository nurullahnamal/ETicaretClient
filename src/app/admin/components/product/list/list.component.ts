import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_Product } from 'src/app/contracts/list_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent  implements OnInit{
  constructor(spinner:NgxSpinnerService, private productService:ProductService ,private alertifyService:AlertifyService){
    super(spinner);
  }
  displayedColumns: string[]=['name','stock','price','createdDate','updatedDate'];
  dataSource:MatTableDataSource<List_Product>=null;
  @ViewChild(MatPaginator)paginator:MatPaginator;

async getProduct(){
  this.showSpinner(SpinnerType.BallAtom);

  const allProduct: { totalCount: number, products: List_Product[] } = await this.productService.read(this.paginator ? this.paginator.pageIndex:0,this.paginator? this.paginator.pageSize:5,() =>
    this.hideSpinner(SpinnerType.BallAtom), errorMessage => this.alertifyService.message(errorMessage, {
    dismissOthers: true,
    messageType: MessageType.Error,
    position: Position.TopRight
  }));
  this.dataSource = new _MatTableDataSource<List_Product>(allProduct.products);
  this.paginator.length=allProduct.totalCount;
}

  async pageChanged(){
    await this.getProduct();
  }

  async ngOnInit() {
    await  this.getProduct();
  }

}

