import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ListProductsDetailComponent} from "./list-products-detail/list-products-detail.component";
import {CartComponent} from "./cart/cart.component";
import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./guards/login.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent,},
  {
    path: '',
    canActivate: [LoginGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'productDetail/:id', component: ProductDetailComponent },
      { path: 'listProductsDetail', component: ListProductsDetailComponent,},
      { path: '', pathMatch: 'full', redirectTo: 'listProductsDetail' },
      { path: 'cart', component: CartComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
