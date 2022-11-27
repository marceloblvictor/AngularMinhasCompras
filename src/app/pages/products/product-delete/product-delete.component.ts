import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  id: number = 0;
  
  products: Product[] = [];

  product : any = null;

  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private client: HttpClient) { }

  onSubmit() { 
    this.client.delete("https://localhost:7210/api/Products/" + this.product.id, this.product)
      .subscribe( () => {
        this.submitted = true;
      }); 
    }

    redirectToList(){
      this.router.navigate(['/products']);
    }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));

    this.client.get("https://localhost:7210/api/Products/" + this.id)
      .subscribe(
        (data) => this.product = data as Product
      );
  }

}
