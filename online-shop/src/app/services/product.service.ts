import {Injectable} from '@angular/core';
import {Product} from "../product";
import { HttpClient } from '@angular/common/http';
import {map, Observable} from "rxjs";
import {Order} from "../order";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cartProducts: Order[] = [];

  constructor(private http: HttpClient) {}

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiURL}/products/${id}`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiURL}/products`);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiURL}/products/${id}`);
  }

  editProduct(data: any, id: number){
    return this.http.put(`${environment.apiURL}/products/${id}`,data).pipe(map((res:any)=>{return res;}))
  }

  addProduct(data: any){
    return this.http.post(`${environment.apiURL}/products`,data).pipe(map((res:any)=>{return res;}))
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

  getOrders(): Order[] {
    return this.cartProducts;
  }
}
