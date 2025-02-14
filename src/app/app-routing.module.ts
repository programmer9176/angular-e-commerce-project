import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerGuardsGuard } from './guards/seller-guards.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'seller-auth', component: SellerAuthComponent
  },
  {
    path:'search/:query', component: SearchComponent
  },
  {
    path:'seller-home', component: SellerHomeComponent, canActivate:[SellerGuardsGuard]
  },
  {
    path:'seller-add-product', component: SellerAddProductComponent, canActivate:[SellerGuardsGuard]
  },
  {
    path:'seller-update-product/:id', component: SellerUpdateProductComponent, canActivate:[SellerGuardsGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
