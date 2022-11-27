import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {  

  products : Product[] = [];

  constructor(private client: HttpClient) { }

  ngOnInit(): void {
    
    this.client.get("https://localhost:7210/api/Products")
    .subscribe(
      (data) => this.products = data as Product[]
    );
    
    console.log(this.products);

   }
}

