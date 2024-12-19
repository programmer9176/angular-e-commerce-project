import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  menuType: string = 'default'
  sellerName:string = ''

  ngOnInit(): void {

    this.router.events.subscribe((val: any) => {
      console.log(val.url)

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

  HandleLogout(){
    localStorage.removeItem('seller');
    this.router.navigate(['seller-auth'])
  }

}
