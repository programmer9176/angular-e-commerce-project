import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { productInterface } from '../models/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: ProductServiceService) { }

  searchProduct: undefined | productInterface[]

  ngOnInit(): void {
    let query = this.service.searchProducts('query').subscribe((result) => {
      console.log(result);
      this.searchProduct = result

    })
  }



}
