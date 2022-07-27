import { createReducer, on } from "@ngrx/store";
import { initialState } from "../state/product.state";
import {login, loginError, loginSuccess} from "../actions/authentication.actions";
import * as AuthenticationActions from '../actions/authentication.actions';

export const authenticationReducer = createReducer(
  initialState,

  on(login, (state) => ({
    ...state,
    status: "loading"
  })),
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user: user,
    status: "success",
    error: null,
  })),

  on(loginError, (state) => ({
    ...state,
    error: null,
    status: 'error',
  })),

)


