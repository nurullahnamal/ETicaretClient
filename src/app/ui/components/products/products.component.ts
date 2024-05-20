import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService,private httpClientService: HttpClientService ) {
    super(spinner);
  }

  ngOnInit(): void {

    this.showSpinner(SpinnerType.BallAtom);

    this.httpClientService.get<Product>({
      controller:"Products"
    }).subscribe(data=>console.log(data));


  /*this.httpClientService.post({
    controller:"products"
  },{
    name:"kalem",
    stock:100,
    price:15
  });


  this.httpClientService.put({
    controller:"products",
  },{
    id:"1a56d81b-df03-4356-8da2-25abd906a93a",
    name:"Renkli kalenm",
    stock:44
  }).subscribe()


    this.httpClientService.delete({
      controller: "Products"
    },"1a56d81b-df03-4356-8da2-25abd906a93a")
    .subscribe();*/



  }
}
