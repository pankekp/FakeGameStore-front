import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FavoriteComponent} from './favorite/favorite.component';
import {CartComponent} from './cart/cart.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {OrderInfoComponent} from './order-info/order-info.component';
import {ContactInfoComponent} from './contact-info/contact-info.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'cart', component: CartComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'order', component: OrderInfoComponent},
  {path: 'contact', component: ContactInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
