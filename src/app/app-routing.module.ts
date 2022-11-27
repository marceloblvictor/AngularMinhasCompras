import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './pages/products/products.component';
import { ProductAddComponent } from './pages/products/product-add/product-add.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { ProductDeleteComponent } from './pages/products/product-delete/product-delete.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'product-detail/:id', component: ProductDetailComponent},
  { path: 'product-delete/:id', component: ProductDeleteComponent},
  { path: 'product-add', component: ProductAddComponent},
  { path: 'products', component: ProductsComponent},
  { path: '', component: ProductsComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ]
  })

  export class AppRoutingModule {
}
