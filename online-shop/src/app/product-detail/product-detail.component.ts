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
    this.getProduct();
  }

  getProduct(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const tempProduct = this.productService.getProduct(id);
    if(tempProduct !== null)
      this.product=tempProduct;
  }

  addToCart(): void {
    window.alert(this.product.brand + " " + this.product.name + ' was added to cart!');
  }
}
