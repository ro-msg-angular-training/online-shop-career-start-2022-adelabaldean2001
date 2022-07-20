import {Component, OnInit} from '@angular/core';
import { Product} from "../product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  product: Product = {
    id: 0,
    brand: '',
    name: '',
    price: 0,
    category: '',
    image: '',
  };

  ngOnInit(): void {
    this.get();
  }

  get(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(data => {this.product = data;});
  }

  addToCart(): void {
    window.alert(this.product.brand + " " + this.product.name + ' was added to cart!');
    this.productService.addToCart(this.product.id);
  }

  delete(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
        window.alert(this.product.name + ' with id = ' + id + ' was deleted!');
      })
    };
}
