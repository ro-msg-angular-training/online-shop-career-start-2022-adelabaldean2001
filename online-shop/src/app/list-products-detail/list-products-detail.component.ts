import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductModel} from "../productModel";
import {AuthenticationService} from "../services/authentication.service";
import {first} from "rxjs";
import {select, Store } from '@ngrx/store';
import {AppState} from "../store/state/app.state";
import * as ProductSelectors from '../store/selectors/product.selectors';
import * as ProductActions from '../store/actions/product.actions';


@Component({
  selector: 'app-list-products-detail',
  templateUrl: './list-products-detail.component.html',
  styleUrls: ['./list-products-detail.component.scss']
})
export class ListProductsDetailComponent implements OnInit {

  @ViewChild('ref') ref?: ElementRef<HTMLInputElement>;

  //products: Product[]=[]
  products$ = this.store.select(ProductSelectors.selectProducts);
  formValue !: FormGroup;

  constructor(
    private productService: ProductService,
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService) {
    this.createForm();
  }

  ngOnInit(): void {
    //this.getProducts();
    this.store.dispatch(ProductActions.getProducts());

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

  getProducts(): void {
    //this.productService.getProducts().pipe(first()).subscribe(data => {this.products = data;})
  }

  postProductDetails(){
    const productModel: ProductModel = {
      id: Math.random(),
      name: this.formValue.value.productName,
      category: this.formValue.value.productCategory,
      price: this.formValue.value.productPrice,
      image: this.formValue.value.productImage,
      description: this.formValue.value.productDescription,
    }
    // this.productService.addProduct(product).subscribe({
    //   next: (res) =>{
    //     alert("Product was added!")
    //     this.ref?.nativeElement.click();
    //     this.formValue.reset();
    //     this.store.dispatch(ProductActions.getProducts());
    //   },
    //   error: err=>{
    //   alert("Something went wrong!");
    // }});

    this.store.dispatch(ProductActions.addProduct({productModel}));
    alert("Product was added!")
    this.ref?.nativeElement.click();
    this.formValue.reset();
    this.store.dispatch(ProductActions.getProducts());
  }
}
