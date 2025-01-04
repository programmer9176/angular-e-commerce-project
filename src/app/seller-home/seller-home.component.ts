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

  ngOnInit(): void {
    this.service.getProdctData().subscribe((result)=>{
      this.productList = result;
    })
  }



}
