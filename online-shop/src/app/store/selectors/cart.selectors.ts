import {AppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {CartState} from "../state/cart.state";

export const selectCartState = (state: AppState) => state.cart;

export const selectCartProducts = createSelector(
  selectCartState,
  (state: CartState) => state.products);
