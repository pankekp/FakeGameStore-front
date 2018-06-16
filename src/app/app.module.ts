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
import {HttpClientModule} from '@angular/common/http';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SecKillComponent,
    GoodShowComponent,
    GoodDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: GoodService, useClass: GoodService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
