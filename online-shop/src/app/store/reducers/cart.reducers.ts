import { createReducer, on } from "@ngrx/store";
import { initialState } from "../state/product.state";
import {
  addToCart,
  addToCartError,
  addToCartSuccess,
  checkout,
  checkoutError,
  checkoutSuccess
} from "../actions/cart.actions";
import {initialCartState} from "../state/cart.state";

export const cartReducer = createReducer(
  initialCartState,

  on(addToCart, (state, {id}) => {
    let product = state.products.find(products => products.productId === id);
    if(product){
      let productFind = { productId: id, quantity: product.quantity + 1 }
      return {
        ...state,
        products: state.products.map((data) => {
          if (data.productId === id){
            return productFind
          } else{
            return data;
          }
        }),
        status: 'success',
        error: "",
      };
    } else {
      return {
        ...state,
        products: [...state.products, {productId: id, quantity: 1}],
        status: "success",
        error: null,
      }
    }
  }),
  on(addToCartSuccess, (state) => ({
    ...state,
    products: [],
    error: null,
    status: 'error',
  })),
  on(addToCartError, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(checkout, (state) => ({
      ...state,
      status: 'loading',
    }
  )),
  on(checkoutSuccess, (state) => ({
    ...state,
    products: [],
    error: null,
    status: 'success',
  })),
  on(checkoutError, (state) => ({
    ...state,
    error: 'error',
    status: 'error',
  })),

)


