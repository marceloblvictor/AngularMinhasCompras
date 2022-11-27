import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductAddComponent } from './pages/products/product-add/product-add.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDeleteComponent } from './pages/products/product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
