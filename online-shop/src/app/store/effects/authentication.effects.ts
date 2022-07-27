import { Injectable } from '@angular/core';
import * as AuthenticationActions from '../actions/authentication.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap, of, switchMap, tap} from 'rxjs';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthenticationActions.login),
      switchMap(({loginCredential}) => {
        return this.authenticationService.authenticatedUser(loginCredential)
          .pipe(
            map((user) => AuthenticationActions.loginSuccess({user})),
            catchError((response) => of(AuthenticationActions.loginError({response})))
          );
      })
    );
  });

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthenticationActions.loginSuccess),
        tap(() => {
          console.log('You are successfully logged in!')
          this.router.navigate(['/listProductsDetail']);
        })
      ),
    {dispatch: false}

  );

  loginError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthenticationActions.loginError),
        tap(() => alert('The credentials you introduced do not exist!'))
      ),
    {dispatch: false}
  );


  constructor(private actions$: Actions, private authenticationService: AuthenticationService, private router: Router) {}


}
