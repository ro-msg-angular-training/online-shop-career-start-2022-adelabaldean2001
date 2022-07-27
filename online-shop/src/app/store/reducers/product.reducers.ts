import { createReducer, on } from "@ngrx/store";
import { initialState } from "../state/product.state";
import {
  getProducts,
  getProductsSuccess,
  getProductsError,
  addProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getProductSuccess,
  getProductError,
  addProductError,
  addProductSuccess,
  deleteProductSuccess,
  deleteProductError, editProductSuccess, editProductError
} from "../actions/product.actions";

export const productReducer = createReducer(
  initialState,

  on(getProduct, (state) => ({
    ...state,
    status: "loading"
  })),
  on(getProductSuccess, (state, {product}) => ({
    ...state,
    product: product,
    status: "success",
    error: null,
  })),
  on(getProductError, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),


  on(getProducts, (state) => ({
    ...state,
    status: 'loading'})),
  on(getProductsSuccess, (state, { products }) => ({
    ...state,
    products: products,
    error: null,
    status: 'success',
  })),
  on(getProductsError, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(addProduct, (state, { productModel }) => ({
    ...state,
    products: [...state.products, productModel],
    status: 'loading'
  })),
  on(addProductSuccess, (state) => ({
    ...state,
    status: "success",
    error: null,
  })),
  on(addProductError, (state) => ({
    ...state,
    status: "error",
    error: null,
  })),

  on(deleteProduct, (state, { id }) => ({
    ...state,
    products: state.products.filter((product) => product.id !== id),
  })),
  on(deleteProductSuccess, (state) => ({
    ...state,
    status: "success",
    error: null,
  })),
  on(deleteProductError, (state) => ({
    ...state,
    status: "error",
    error: null,
  })),

  on(editProduct, (state, { productModel }) => ({
    ...state,
    status: 'loading'
  })),
  on(editProductSuccess, (state) => ({
    ...state,
    status: "success",
    error: null,
  })),
  on(editProductError, (state) => ({
    ...state,
    status: "error",
    error: null,
  })),
)


