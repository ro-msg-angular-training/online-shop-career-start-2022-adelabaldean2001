import { Component, OnInit } from '@angular/core';
import {Order} from "../order";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts: Order[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cartProducts = this.productService.getOrders();
  }
  checkout(): void{
    window.alert('Completed order!');
    this.productService.checkout();
  }

}
