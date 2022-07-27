import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ListProductsDetailComponent } from './list-products-detail/list-products-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';

import {StoreModule} from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import {productReducer} from "./store/reducers/product.reducers";
import {ProductEffects} from "./store/effects/product.effects";
import {cartReducer} from "./store/reducers/cart.reducers";
import {CartEffects} from "./store/effects/cart.effects";
import {authenticationReducer} from "./store/reducers/authentication.reducers";
import {AuthenticationEffects} from "./store/effects/authentication.effects";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    ListProductsDetailComponent,
    NavbarComponent,
    CartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([ProductEffects, CartEffects, AuthenticationEffects]),
    StoreModule.forRoot({products: productReducer, cart: cartReducer, authentication: authenticationReducer}, {}),
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
