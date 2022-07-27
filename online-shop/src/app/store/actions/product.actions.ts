import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/product";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductModel} from "../../productModel";

export const getProduct = createAction(
  '[Product] Get Product',
  props<{ id: number }>()
)
export const getProductSuccess = createAction(
  '[Product] Get Product Success',
  props<{ product: Product }>()
)
export const getProductError = createAction(
  '[Product] Get Product Error',
  props<{ error: string }>()
)

export const getProducts = createAction(
  '[Product List] Get Products'
);
export const getProductsSuccess = createAction(
  '[Product] Get Products Success',
  props<{ products: Product[] }>()
);
export const getProductsError = createAction(
  '[Product] Get Products Error',
  props<{ error: string }>()
);

export const addProduct = createAction(
  '[ProductModel] Add Product',
  props<{ productModel: ProductModel }>()
);
export const addProductSuccess = createAction(
  '[ProductModel] Add Product Success',
  props<{ productModel: ProductModel }>()
);
export const addProductError = createAction(
  '[ProductModel] Add Product Error',
  props<{ response: HttpErrorResponse }>()
);

export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ id: number }>()
);
export const deleteProductSuccess = createAction(
  '[Product] Delete Product Success',
  props<{ id: number }>()
);
export const deleteProductError = createAction(
  '[Product] Delete Product Error',
  props<{ response: HttpErrorResponse }>()
);

export const editProduct = createAction(
  '[ProductModel] Edit Product',
  props<{ productModel: ProductModel }>()
);
export const editProductSuccess = createAction(
  '[ProductModel] Edit Product Success',
  props<{ productModel: ProductModel }>()
);
export const editProductError = createAction(
  '[ProductModel] Edit Product Error',
  props<{ response: HttpErrorResponse }>()
);

