import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compontent/header/header.component';
import { CartComponent } from './compontent/cart/cart.component';
import { ProductComponent } from './compontent/product/product.component';
import{HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
