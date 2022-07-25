import { LoadingStatus } from "src/app/store/common";
import { Order } from "../../order";

export interface CartState {
  products: Order[];
  error: string | null;
  status: LoadingStatus;
};

export const initialState: CartState = {
  products: [],
  error: '',
  status: 'pending'
};
