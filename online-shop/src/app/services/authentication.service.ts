import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import {Observable} from "rxjs";
import {Product} from "../product";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userLogged !: Observable<any>;
  userRoles !: string[];

  user: User = {
    username: '',
    roles: []
  };

  constructor(private userService: UserService) { }

  authenticateUser(user: any){
    this.user.username = user.userName;
    this.userLogged = this.userService.post(user);
    this.userLogged.subscribe(data =>{
        this.user.roles=data.roles;
        this.userRoles=this.user.roles;
        console.log(this.userRoles);
    })
    return this.userLogged;
  }
}
