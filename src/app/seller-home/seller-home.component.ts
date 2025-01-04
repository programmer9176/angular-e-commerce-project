import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { productInterface } from '../models/models';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  constructor(private service: ProductServiceService) { }

  productList: undefined | productInterface[];
  deleteMsg: undefined | string

  ngOnInit(): void {
    this.List();
  }

  List() {
    this.service.getProdctData().subscribe((result) => {
      this.productList = result;
    })
  }

  deleteProduct(id: number) {
    console.log("product id: ", id);
    this.service.deleteProductData(id).subscribe((result) => {
      console.log(result)
      this.List();
      this.deleteMsg = "Product deleted successfully"

      setTimeout(() => {
        this.deleteMsg = undefined
      }, 3000);
    })
  }

}
