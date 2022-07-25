import { Injectable } from '@angular/core';
import * as CartActions from '../actions/cart.actions';
import { ProductService } from 'src/app/services/product.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, concatMap, map, mergeMap, of, switchMap} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CartEffects {
  // addToCart$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(CartActions.addToCart),
  //     mergeMap((action) => {
  //       return this.productService.addToCart(action.id)
  //         .pipe(
  //           map(() => action.id),
  //           map((id) => CartActions.addToCartSuccess({id})),
  //           catchError((error) => of(CartActions.addToCartError({error})))
  //         );
  //     })
  //   );
  // });


  constructor(private actions$: Actions, private productService: ProductService) {}


}
