import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {SecKillComponent} from './sec-kill/sec-kill.component';
import {GoodShowComponent} from './good-show/good-show.component';
import {GoodDetailComponent} from './good-detail/good-detail.component';
import {HomeComponent} from './home/home.component';
import {GoodService} from './service/good.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CartComponent} from './cart/cart.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {OrderInfoComponent} from './order-info/order-info.component';
import {UserService} from './service/user.service';
import {ResponseProcessorService} from './service/response-processor.service';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SecKillComponent,
    GoodShowComponent,
    GoodDetailComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    OrderInfoComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: GoodService, useClass: GoodService},
    {provide: UserService, useClass: UserService},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseProcessorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
