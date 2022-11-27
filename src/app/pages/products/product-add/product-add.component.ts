import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(
    private router: Router,
    private client: HttpClient) { }

  submitted = false;

  product : Product = {
    id: 0,
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    category: "",
    status: true
  };

  categories : string[] = [
    "Eletrônico", "Papelaria", "Material de Limpeza", "Alimento", "Transporte"
  ];

  redirectToList(){
    this.router.navigate(['/products']);
  }

  clearForm(){
    this.product = {
      id: 0,
      name: "",
      description: "",
      price: 0,
      category: "",
      quantity: 0,
      status: true
    };
  }

  onSubmit() { 
    
    this.client.post<Product>("https://localhost:7210/api/Products", this.product)
      .subscribe( () => {
        this.submitted = true;
        this.router.navigate(['/products']);
      });

  }

  ngOnInit(): void { }

}
