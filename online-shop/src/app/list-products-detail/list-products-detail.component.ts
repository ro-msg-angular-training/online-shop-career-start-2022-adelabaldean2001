import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductModel} from "../productModel";
import {AuthenticationService} from "../services/authentication.service";
import {first} from "rxjs";

@Component({
  selector: 'app-list-products-detail',
  templateUrl: './list-products-detail.component.html',
  styleUrls: ['./list-products-detail.component.scss']
})
export class ListProductsDetailComponent implements OnInit {

  @ViewChild('ref') ref?: ElementRef<HTMLInputElement>;

  products: Product[]=[]
  formValue !: FormGroup;

  productModelObj: ProductModel = new ProductModel();

  constructor(private productService: ProductService, private formBuilder: FormBuilder, public authenticationService: AuthenticationService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.get();

    this.formValue = this.formBuilder.group({
      productName: [''],
      productCategory: [''],
      productPrice: [''],
      productImage: [''],
      productDescription: ['']
    })
  }

  createForm() {
    this.formValue = this.formBuilder.nonNullable.group({
      productName: ['', Validators.required ],
      productPrice: ['', Validators.required ]
    });
  }

  get(): void {
    this.productService.getProducts().pipe(first()).subscribe(data => {this.products = data;})
  }

  postProductDetails(){
    this.productModelObj.name = this.formValue.value.productName;
    this.productModelObj.category = this.formValue.value.productCategory;
    this.productModelObj.price = this.formValue.value.productPrice;
    this.productModelObj.image = this.formValue.value.productImage;
    this.productModelObj.description = this.formValue.value.productDescription;

    this.productService.addProduct(this.productModelObj).subscribe({
      next: (res) =>{
        alert("Product was added!")
        this.ref?.nativeElement.click();
        this.formValue.reset();
        this.get();
      },
      error: err=>{
      alert("Something went wrong!");
    }});
  }
}
