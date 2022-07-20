import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.edit(this.productService.getProduct(id),id);
  }

  edit(value: any, id: number) {
    let body = {
      name: value.name,
      category: value.category,
      price: value.price
    }
    this.productService.editProduct(body, id).subscribe(response => {
      console.log(response);
      window.alert('The product was edited!');
    })
  }


}
