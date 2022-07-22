import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginCredential} from "../loginCredential";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formValue !: FormGroup;

  user: LoginCredential = new LoginCredential();

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
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
    this.user.username = this.formValue.value.username;
    this.user.password = this.formValue.value.password;
    this.authenticationService.authenticatedUser(this.user)
      .subscribe({
        next: () => {
          this.router.navigate(['/listProductsDetail']);
        },
        error: () => {
          alert(`Failed!`);
        }
      });
    alert(`Username: ${this.user.username}, Password: ${this.user.password}`);
  }

}

