import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import {catchError, Observable, of} from "rxjs";
import {Product} from "../product";
import {User} from "../user";
import {LoginCredential} from "../loginCredential";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //userLogged !: boolean;

  user: User = {
    username: '',
    roles: []
  };

  constructor(private userService: UserService) { }

  authenticatedUser(loginCredential: LoginCredential){
    const login$ = this.userService.post(loginCredential);

    login$.pipe(catchError(error => { this.userLogged = null; return of(null);})).subscribe(
      data =>{
        if(data) {
          this.user = data;
          this.userLogged = this.user.username;
          console.log(this.userLogged);
          //localStorage.setItem('loggedUser',this.user.username);
          console.log(localStorage);
        }
    })
    return login$;
  }

  isDisabled(): boolean {
    for(let u of this.user.roles)
      if(u === "admin")
        return true;
    return false;
  }

  get userLogged(): string | null{
    return localStorage.getItem('loggedUser');
  }

  set userLogged(value: string | null){
    if (value === null){
      localStorage.removeItem('loggedUser');
    } else{
      localStorage.setItem('loggedUser',value);
    }
  }

}
