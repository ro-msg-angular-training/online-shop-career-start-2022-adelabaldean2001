import {EventEmitter, Injectable, Output} from '@angular/core';
import {Product} from "../product";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Order} from "../order";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[] = [
  //   {
  //     id: 1,
  //     brand: 'Nurton',
  //     name: 'Office chair',
  //     price: 210,
  //     category: 'Furniture',
  //     image: 'https://images-na.ssl-images-amazon.com/images/I/613A7vcgJ4L._SL1500_.jpg',
  //   },
  //   {
  //     id: 2,
  //     brand: 'Ikea',
  //     name: 'Sofa',
  //     price: 21,
  //     category: 'Furniture',
  //     image: 'https://wakefit-co.s3.ap-south-1.amazonaws.com/img/sofa-sets/napper/regular/lifestyle/FOBL.jpg',
  //   },
  //   {
  //     id: 3,
  //     brand: 'Canadian Wood',
  //     name: 'Bed',
  //     price: 150,
  //     category: 'Furniture',
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIiJpJUv00zqeE16mNLzoR0y0Rv_ZOS3_xjA&usqp=CAU',
  //   }
  // ];

  cartProducts: Order[] = [];

  constructor(private http: HttpClient) {}

  @Output() event = new EventEmitter();

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${'http://localhost:3000'}/products/${id}`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${'http://localhost:3000'}/products`);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${'http://localhost:3000'}/products/${id}`);
  }

  addToCart(id: number): void{
      let index = -1;
      index = this.cartProducts.findIndex(
        cartProducts => cartProducts.productId === id
      );
      if (index != -1) {
        this.cartProducts[index].quantity += 1;
      } else if (index === -1) {
        this.cartProducts.push({productId: id, quantity: 1 })
      }
  }

  checkout(){
    return this.http.post(`${'http://localhost:3000'}/orders`, {products: this.cartProducts}, {responseType: 'text'})
  }

/*
  deleteProduct(id) {
    let index = this.cartProducts.findIndex(item => item.product_id === id);
    this.cartProducts.splice(index, 1);
    this.sum();
  }

  sum(): void {
    this.totalQuantity = 0;
    this.price = 0;
    this.totalPrice = 0;
    if (this.cartProducts) {
      this.cartProducts.map(product => {
        this.totalQuantity += product.product_quanity;
        this.price += product.product_price;
        this.totalPrice += product.product_price * product.product_quanity;
      });
    }
  }
*/

  getOrders(): Order[] {
    return this.cartProducts;
  }
}
