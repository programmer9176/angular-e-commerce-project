import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { productInterface } from '../models/models';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
  }

  addProductForm = new FormGroup({
    p_name: new FormControl(''),
    p_category: new FormControl(''),
    p_price: new FormControl(''),
    p_color: new FormControl(''),
    img_url: new FormControl(''),
    p_description: new FormControl('')
  })

  addProduct(data:productInterface){
    console.log(data)

    this.productService.addProdctData(data).subscribe((result)=>{
      console.log(result);
      this.addProductForm.reset();
    })
  }

}
