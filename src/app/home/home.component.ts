import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { productInterface } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ProductServiceService) { }
  trendyProducts: undefined | productInterface[]

  ngOnInit(): void {
    this.service.trendyProducs().subscribe((result) => {
      this.trendyProducts = result

    })
  }

}
