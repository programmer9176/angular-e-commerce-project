import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

  }
}
