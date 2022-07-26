import { Component, OnInit } from '@angular/core';
import {Order} from "../order";
import {ProductService} from "../services/product.service";
import {AppState} from "../store/state/app.state";
import {Store} from "@ngrx/store";
import {selectCartProducts} from "../store/selectors/cart.selectors";
import {take} from "rxjs";
import {checkout} from "../store/actions/cart.actions";
import * as CartActions from "../store/actions/cart.actions";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts: Order[] = [];

  constructor(private productService: ProductService,private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectCartProducts).subscribe((data) => this.cartProducts = data);
   // this.cartProducts = this.productService.getOrders();
  }
  checkout(): void{
    window.alert('Completed order!');
    //this.productService.checkout();

    this.store.dispatch(CartActions.checkout({products: this.cartProducts}));
  }

}
