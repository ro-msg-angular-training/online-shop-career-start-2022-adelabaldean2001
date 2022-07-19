import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ListProductsDetailComponent} from "./list-products-detail/list-products-detail.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productDetail/:id', component: ProductDetailComponent },
  { path: 'listProductsDetail', component: ListProductsDetailComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
