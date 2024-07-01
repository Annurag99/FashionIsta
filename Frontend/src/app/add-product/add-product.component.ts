import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../Service/product.service';
import { Product } from '../Model/product';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  private requestObj;
  private productRes: Product;

  constructor(private productService: ProductService, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

  }
  private editProductDetails(form: NgForm, content) {
    console.log(form.value);
    this.requestObj = {
      title : form.value.title,
      image :  form.value.image,
      category : form.value.category,
      subtitle : form.value.subtitle,
      price :  form.value.price,
      other :  form.value.other,
    };
      this.productService.addNewProductData(this.requestObj).subscribe(
        (res) =>
        console.log('Sent') );
      }

}

