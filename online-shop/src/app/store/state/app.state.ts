import { ProductState } from "./product.state";
import {CartState} from "./cart.state";
import {AuthenticationState} from "./authentication.state";

export interface AppState {
  products: ProductState;
  cart: CartState;
  authentication: AuthenticationState;
}
