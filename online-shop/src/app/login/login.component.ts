import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginCredential} from "../loginCredential";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {login} from "../store/actions/authentication.actions";
import {AppState} from "../store/state/app.state";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formValue !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    //private router: Router,
    private store: Store<AppState>){
    this.createForm();
  }

  createForm() {
    this.formValue = this.formBuilder.nonNullable.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }

  doLogin(): void {
    let user: LoginCredential = {
      username: this.formValue.value.username,
      password: this.formValue.value.password
    }

    this.store.dispatch(login({loginCredential: user}));

    console.log(`ASD Username: ${user.username}, Password: ${user.password}`);
  }

}

