import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Mycomponents/about/about.component';
import { ContactusComponent } from './Mycomponents/contactus/contactus.component';
import { FaqComponent } from './Mycomponents/faq/faq.component';
import { ProductsComponent } from './Mycomponents/products/products.component';
import { PricingComponent } from './Mycomponents/pricing/pricing.component';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { SignupComponent } from './Mycomponents/signup/signup.component';
import { LoginComponent } from './Mycomponents/login/login.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
