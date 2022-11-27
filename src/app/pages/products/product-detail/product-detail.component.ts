import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: number = 0;
  
  products: Product[] = [];

  product : any = null;

  submitted = false;

  categories : string[] = [
    "Eletrônico", "Papelaria", "Material de Limpeza", "Alimento", "Transporte"
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private client: HttpClient) { }
  
    redirectToList(){
      this.router.navigate(['/products']);
    }

  onSubmit() { 
    
    
    this.client.put<Product>("https://localhost:7210/api/Products/" + this.product.id, this.product)
      .subscribe( () => {
        this.submitted = true;
        this.router.navigate(['/products']);
      }); 
    }
     
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));

    this.client.get("https://localhost:7210/api/Products/" + this.id)
      .subscribe(
        (data) => this.product = data as Product
      );
        
  }

}
