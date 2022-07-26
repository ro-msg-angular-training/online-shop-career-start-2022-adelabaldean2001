import { Injectable } from '@angular/core';
import * as CartActions from '../actions/cart.actions';
import { ProductService } from 'src/app/services/product.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CartEffects {
  constructor(private actions$: Actions, private productService: ProductService) {}

  checkout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.checkout),
      switchMap(() => this.productService.checkout()
        .pipe(
          map(() => CartActions.checkoutSuccess()),
          catchError((error) => of(CartActions.checkoutError({ error })))
        )
      ),
    ),
  );
}
