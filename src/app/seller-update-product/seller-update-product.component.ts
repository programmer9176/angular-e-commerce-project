import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { productInterface } from '../models/models';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ProductServiceService) { }

  productData: undefined | productInterface
  formsMsg: undefined | string

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId && this.service.singleProductData(productId).subscribe((result) => {
      console.log(result)
      this.productData = result
    })
  }

  updateProductForm = new FormGroup({
    p_name: new FormControl(''),
    p_category: new FormControl(''),
    p_price: new FormControl(''),
    p_color: new FormControl(''),
    img_url: new FormControl(''),
    p_description: new FormControl('')
  })

  updateProduct(data: any) {
    console.log(data);

    if (this.productData) {
      data.id = this.productData.id
    }

    this.service.updateProductData(data).subscribe((result) => {
      console.log(result);
      this.formsMsg = "Product updated successfully"
    })

    setTimeout(() => {
      this.formsMsg = undefined
    }, 3000)


  }
}
