import { createAction, props } from "@ngrx/store";
import {Order} from "../../order";

export const addToCart = createAction(
  '[Order] Add Product to Cart',
  props<{ id: number }>()
);
export const addToCartSuccess = createAction(
  '[Order] Add Product to Cart Success',
  props<{ id: number }>()
);
export const addToCartError = createAction(
  '[Order] Add Product to Cart Error',
  props<{ error: string }>()
);

export const checkout = createAction(
  '[Checkout] Checkout',
  props<{ products: Order[] }>()
);
export const checkoutSuccess = createAction(
  '[Checkout] Checkout Success',
);
export const checkoutError = createAction(
  '[Checkout] Checkout Error',
  props<{ error: string }>()
);
