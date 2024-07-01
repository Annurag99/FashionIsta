import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../Model/product';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  private productId;
  private productRes = {};
x:any;

  constructor(private productService: ProductService, private http: HttpClient, private route: ActivatedRoute) { 
    this.productId = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.getProductDetails(this.productId);
  }
  private getProductDetails(productId) {
    this.productService.getProductDataById(this.productId).subscribe((Resp) =>
      this.productRes = Resp
    );
  }
} 

