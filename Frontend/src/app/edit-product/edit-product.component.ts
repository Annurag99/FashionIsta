import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../Service/product.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  private productId;
  private requestObj;
  private productRes = {};
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
    this.productService.editProductDataById(this.requestObj).subscribe(
      (res) =>
      console.log('Edited') );
 }

DeleteEntry() {
  this.productService.deleteProductDataById(this.productId).subscribe(
    (res) => console.log('Deleted') );
}
}
