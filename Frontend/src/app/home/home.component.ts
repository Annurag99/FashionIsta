import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  x:any;
  i: any;

  constructor() { }

  ngOnInit() {
    this.plusDivs(0);
    this.currentSlide(0);

  }

slideIndex = 1;
plusDivs(n)
{
 this.showDivs(this.slideIndex += n);
}
currentSlide(n) {
  this.showDivs(this.slideIndex = n);
}

showDivs(n) {
 this.x = document.getElementsByClassName("slides");
 var dots = document.getElementsByClassName("dot");
 if (n > this.x.length) {this.slideIndex = 1}
 if (n < 1) {this.slideIndex = this.x.length}
 for (this.i = 0; this.i < this.x.length; this.i++) {
   this.x[this.i].style.display = "none";  
 }

 for (this.i = 0; this.i < dots.length; this.i++) {
  dots[this.i].className = dots[this.i].className.replace(" active", "");
}
this.x[this.slideIndex-1].style.display = "block"; 
dots[this.slideIndex-1].className += " active"; 

}


}



