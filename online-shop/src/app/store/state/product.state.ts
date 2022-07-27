import { Product } from "src/app/product";
import { LoadingStatus } from "src/app/store/common";

export interface ProductState {
  products: Product[];
  product: Product | undefined;
  error: string | null;
  status: LoadingStatus;
};

export const initialState: ProductState = {
  products: [],
  product: undefined,
  error: '',
  status: 'pending'
};
