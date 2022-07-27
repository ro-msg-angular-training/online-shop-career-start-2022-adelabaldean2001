import { Injectable } from '@angular/core';
import * as ProductActions from '../actions/product.actions';
import { ProductService } from 'src/app/services/product.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, concatMap, map, mergeMap, of, switchMap} from 'rxjs';
import {ProductModel} from "../../productModel";
import {Product} from "../../product";

@Injectable({
  providedIn: 'root',
})
export class ProductEffects {

  getProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.getProduct),
      mergeMap((action) => {
        return this.productService.getProduct(action.id).pipe(
          map((product) => ProductActions.getProductSuccess({product: product})),
          catchError((error) => of(ProductActions.getProductError({error: error})))
        );
      })
    );
  });

  getProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.getProducts),
      mergeMap(() => {
        return this.productService.getProducts().pipe(
          map((products) => ProductActions.getProductsSuccess({ products: products })),
          catchError((error) => of(ProductActions.getProductsError({error})))
        );
      })
    );
  });

  addProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addProduct),
      mergeMap((action) => {
        return this.productService.addProduct(action.productModel)
          .pipe(
            map((productModel) => ProductActions.addProductSuccess({productModel})),
            catchError((response) => of(ProductActions.addProductError({response})))
          );
      })
    );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      mergeMap((action) => {
        return this.productService.deleteProduct(action.id)
          .pipe(
            map(() => action.id),
            map(id => ProductActions.deleteProductSuccess({id})),
            catchError((response) => of(ProductActions.deleteProductError({response})))
          );
      })
    );
  });

  editProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.editProduct),
      mergeMap((action) => {
        return this.productService.editProduct(action.productModel)
          .pipe(
            map(() => action.productModel),
            map((productModel: ProductModel) => ProductActions.editProductSuccess({productModel})),
            catchError((response) => of(ProductActions.editProductError({response})))
          );
      })
    );
  });


  constructor(private actions$: Actions, private productService: ProductService) {}


}
