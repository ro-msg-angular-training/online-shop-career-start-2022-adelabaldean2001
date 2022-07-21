import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formValue !: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
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
    const username = this.formValue.value.username ?? '';
    const password = this.formValue.value.password ?? '';
    alert(`Username: ${username}, Password: ${password}`);
    this.userService.post(user);


  }
}

