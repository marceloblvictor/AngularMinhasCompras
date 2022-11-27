import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { Customer } from 'src/models/customer';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products : Product[] = [];

  totalAmount : number = 0;

  customerName! : string;

  userExists = true;

  constructor(
    private router: Router,
    private client: HttpClient) { }

  onSubmit() { 
    
    this.client.get("https://localhost:7134/api/Customers")
      .subscribe( (data) => {
        let customers = data as Customer[];

        if (customers.find(
          c => c.name == this.customerName
        ) == undefined){
          this.userExists = false;
          return;
        }
        else {
          this.router.navigate(['/orders-success'])
        }
      });
      

  }

  ngOnInit(): void {
    
    this.client.get("https://localhost:7210/api/Products")
    .subscribe(
      (data) => {
        this.products = data as Product[];


        let total = 0;
        this.products.forEach(
          p => total += p.quantity * p.price
        );

        this.totalAmount = total;
      }
    );
    
    console.log(this.products);
  }

}
