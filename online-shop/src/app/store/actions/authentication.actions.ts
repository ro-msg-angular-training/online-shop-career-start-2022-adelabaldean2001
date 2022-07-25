import { createAction, props } from "@ngrx/store";

export const addToCart = createAction(
  '[Product] Add Product to Cart',
  props<{ id: number }>()
);
export const addToCartSuccess = createAction(
  '[Product] Add Product to Cart Success',
  props<{ id: number }>()
);
export const addToCartError = createAction(
  '[Product] Add Product to Cart Error',
  props<{ error: string }>()
);

