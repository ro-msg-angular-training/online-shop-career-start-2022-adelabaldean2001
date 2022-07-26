import { createSelector } from '@ngrx/store';
import { AppState } from "../state/app.state";
import { ProductState } from "../state/product.state";

export const selectProductState = (state: AppState) => state.products;

export const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products);

export const selectProduct = createSelector(
  selectProductState,
  (state: ProductState) => state.product);
