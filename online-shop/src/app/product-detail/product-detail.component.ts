import {Component, OnInit} from '@angular/core';
import { Product} from "../product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ProductModel} from "../productModel";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  formValue !: FormGroup;
  productModelObj: ProductModel = new ProductModel();

  constructor(private productService: ProductService, private route: ActivatedRoute, private formBuilder: FormBuilder, public authenticationService: AuthenticationService) {
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

    this.formValue = this.formBuilder.group({
      productName: [''],
      productCategory: [''],
      productPrice: ['']
    })
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

  onEdit(value: any){
    this.productModelObj.id = value.id;
    this.formValue.controls['productName'].setValue(value.name);
    this.formValue.controls['productCategory'].setValue(value.category);
    this.formValue.controls['productPrice'].setValue(value.price);
  }

  updateProductDetails(){
    this.productModelObj.name = this.formValue.value.productName;
    this.productModelObj.category = this.formValue.value.productCategory;
    this.productModelObj.price = this.formValue.value.productPrice;

    this.productService.editProduct(this.productModelObj,this.productModelObj.id).subscribe(res=>{
      alert("Updated successfully!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.productService.getProducts();
    })
  }

}
