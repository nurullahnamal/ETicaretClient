import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit{
  constructor(spinner:NgxSpinnerService ,private productService:ProductService, private alertify:AlertifyService){
    super(spinner);
  }
  ngOnInit(): void {
  }

  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    this.showSpinner(SpinnerType.BallAtom);

    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);

   if(!name.value)
    this.alertify.message("lütfen ürün adini  giriniz",{
      dismissOthers: true,
      messageType: MessageType.Success,
      position: Position.TopRight
    });

    if (parseInt(stock.value)<1)
      this.alertify.message("lütfen stok miktarini girnizz", {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      });

    if (parseFloat(price.value) < 11)
      this.alertify.message("lütfen fiyat değerini istenen değer de olamasına dikkat ediniz 11 - 9999999", {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      });


    this.productService.create(create_product, () => {
      this.hideSpinner(SpinnerType.BallAtom);
      this.alertify.message("Ürün başariyla eklenmiştir.", {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      });
      return;

    }, errorMessage => {
      this.alertify.message(errorMessage,
        {
          dismissOthers: true,
          messageType: MessageType.Error,
          position: Position.TopRight
        });
    });
  }
}
