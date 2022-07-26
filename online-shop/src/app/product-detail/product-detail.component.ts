import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Product} from "../product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ProductModel} from "../productModel";
import {AuthenticationService} from "../services/authentication.service";
import * as ProductActions from "../store/actions/product.actions";
import {AppState} from "../store/state/app.state";
import {Store} from "@ngrx/store";
import * as ProductSelectors from "../store/selectors/product.selectors";
import * as CartActions from "../store/actions/cart.actions";
import {Actions, ofType} from "@ngrx/effects";
import {getProductSuccess} from "../store/actions/product.actions";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  formValue !: FormGroup;
  private productId !: number;
  product$ = this.store.select(ProductSelectors.selectProduct);

  @ViewChild('ref') ref?: ElementRef<HTMLInputElement>;

  constructor(
    private productService: ProductService,
    private store: Store<AppState>,
    private actions$: Actions,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService) {
  }

  id = -1;
  product: Product = {
    id: 0,
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
      productPrice: [''],
      productImage: [''],
    })
  }

  get(): void{
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(this.id).subscribe(data => {this.product = data;});
    //this.store.dispatch(ProductActions.getProduct({id: this.id}));
  }

  addToCart(): void {
    window.alert(this.product.category + " " + this.product.name + ' was added to cart!');
    //this.productService.addToCart(this.product.id);
    this.store.dispatch(CartActions.addToCart({id: this.id}));

  }

  delete(id: number): void {
    this.store.dispatch(ProductActions.deleteProduct({id}));
    window.alert(this.product.name + ' with id = ' + id + ' was deleted!');
    // this.productService.deleteProduct(id).subscribe(() => {
    //     window.alert(this.product.name + ' with id = ' + id + ' was deleted!');
    //   })
    };

  onEdit(value: any){
    this.productId = value.id;
    this.formValue.controls['productName'].setValue(value.name);
    this.formValue.controls['productCategory'].setValue(value.category);
    this.formValue.controls['productPrice'].setValue(value.price);
    this.formValue.controls['productImage'].setValue(value.image);
  }

  updateProductDetails(){
    const productModel: ProductModel = {
      id: this.productId,
      name: this.formValue.value.productName,
      category: this.formValue.value.productCategory,
      price: this.formValue.value.productPrice,
      image: this.formValue.value.productImage,
      description: this.formValue.value.productDescription,
    }

    this.store.dispatch(ProductActions.editProduct({productModel}));
    alert("Updated successfully!")
    this.ref?.nativeElement.click();
    this.formValue.reset();
    this.store.dispatch(ProductActions.getProducts());

    // this.productService.editProduct(productModel).subscribe(res=>{
    //   alert("Updated successfully!")
    //   this.ref?.nativeElement.click();
    //   this.formValue.reset();
    //   this.productService.getProducts();
    // })
  }

}
