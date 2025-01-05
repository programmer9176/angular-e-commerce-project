import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { productInterface } from '../models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private product: ProductServiceService) { }

  menuType: string = 'default'
  sellerName: string = ''

  productSearch: undefined | productInterface[]

  ngOnInit(): void {

    this.router.events.subscribe((val: any) => {
      // console.log(val.url)

      if (val.url) {

        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          this.menuType = 'seller'
          const sellerData = localStorage.getItem('seller')
          this.sellerName = sellerData && JSON.parse(sellerData)[0].name;
        } else {
          console.log('outside of seller area')
          this.menuType = 'default'
        }

      }
    })

  }

  HandleLogout() {
    localStorage.removeItem('seller');
    this.router.navigate(['seller-auth'])
  }

  searchProducts(query: KeyboardEvent) {

    if (query) {
      const element = query.target as HTMLInputElement;
      this.product.searchProducts(element.value).subscribe((result) => {
        if (result.length > 5) {
          result.length = 5
        }
        this.productSearch = result
      })
    }

  }

  hideSearch() {
    this.productSearch = undefined
  }

  searchresult(query:string){
    console.log(query)
    this.router.navigate([`search/${query}`])
  }

}
