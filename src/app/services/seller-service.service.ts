import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { LoginInterface, SignupInterface } from '../models/signup-interface';

@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)

  isError = new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private route: Router) { }

  SignUp(data: SignupInterface) {

    return this.http.post('http://localhost:3000/seller', data).subscribe((result: any) => {
      // this.isSellerLoggedIn.next(true);
      console.log(result)
      localStorage.setItem('seller', JSON.stringify(result))
      this.route.navigate(['seller-home'])

    });
  }

  userLogin(data: LoginInterface) {
    return this.http.get(`http://localhost:3000/seller?email=${data.email}&&password=${data.password}`).subscribe((result: any) => {
      
      console.log(result)

      if (result && result && result.length) {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result))
        this.route.navigate(['seller-home'])
        console.log(result)
      } else {
        console.log('loggedIn failed')
        this.isError.emit(true)
      }

    })
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.route.navigate(['seller-home'])
    }
  }

}
