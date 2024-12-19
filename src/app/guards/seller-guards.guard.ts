import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerServiceService } from '../services/seller-service.service';

@Injectable({
  providedIn: 'root'
})
export class SellerGuardsGuard implements CanActivate {

  constructor(private sellrer: SellerServiceService){}


  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(localStorage.getItem('seller')){
        return true
      }

    return this.sellrer.isSellerLoggedIn;
  }
  
}
