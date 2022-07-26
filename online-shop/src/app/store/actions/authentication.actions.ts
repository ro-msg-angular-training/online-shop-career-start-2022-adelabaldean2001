import { createAction, props } from "@ngrx/store";
import {User} from "../../user";
import {HttpErrorResponse} from "@angular/common/http";
import {LoginCredential} from "../../loginCredential";

export const login = createAction(
  '[User] Login',
  props<{ loginCredential: LoginCredential }>()
)

export const loginSuccess = createAction(
  '[User] Login Success',
  props<{ user: User }>()
)

export const loginError = createAction(
  '[User] Login Error',
  props<{ response: HttpErrorResponse }>()
)

