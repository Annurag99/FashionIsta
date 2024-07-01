import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../Service/product.service';
import { Product } from '../Model/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  private  productList: Product[];
  private productRes;

  constructor(private productService: ProductService , private http: HttpClient, private router: Router) {
   this.productRes = [];
  }

  ngOnInit() {
     this.GetList();
  }
  GetList() {
  this.productService.getProductData().subscribe((data) => this.productRes = data);
}

}