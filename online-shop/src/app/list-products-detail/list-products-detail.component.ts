import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../product";

@Component({
  selector: 'app-list-products-detail',
  templateUrl: './list-products-detail.component.html',
  styleUrls: ['./list-products-detail.component.scss']
})
export class ListProductsDetailComponent implements OnInit {

  products: Product[]=[]

  constructor(private productService: ProductService) { }



  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.products=this.productService.getProducts();
  }

}
