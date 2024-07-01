import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eachcards',
  templateUrl: './eachcards.component.html',
  styleUrls: ['./eachcards.component.scss']
})
export class EachcardsComponent implements OnInit {
  @Input() public productdetails;
  @Input() public records;
  @Input()  public view;
isView:boolean;
private productId;
x:any;
imgUrl:string=this.productdetails

constructor(private productService: ProductService, private http: HttpClient, private route: ActivatedRoute) { 
this.productId = this.route.snapshot.params.id;
}

  ngOnInit() {
    this.isView=this.view;
  }

  flip() {
  this.x = document.getElementById("cart");
  this.x.addClass('flipped');
  this.x = document.getElementById("cart");
  this.x.addClass('added');

   this.x=document.getElementsByClassName('.backside')
   this.x.addClass('show');
   this.x=document.getElementsByClassName('.front')
   this.x.addClass('hide');
  }
   clicked(event) {
    event.target.classList.add('class3'); // To ADD
    event.target.classList.remove('class1'); // To Remove
    event.target.classList.contains('class2'); // To check
    event.target.classList.toggle('class4'); // To toggle
  }
}

     
