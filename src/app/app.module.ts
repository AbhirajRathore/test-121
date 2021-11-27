import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { AboutComponent } from './Mycomponents/about/about.component';
import { ContactusComponent } from './Mycomponents/contactus/contactus.component';
import { FaqComponent } from './Mycomponents/faq/faq.component';
import { ProductsComponent } from './Mycomponents/products/products.component';
import { PricingComponent } from './Mycomponents/pricing/pricing.component';
import { LoginComponent } from './Mycomponents/login/login.component';
import { SignupComponent } from './Mycomponents/signup/signup.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AboutComponent,
    ContactusComponent,
    FaqComponent,
    ProductsComponent,
    PricingComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
