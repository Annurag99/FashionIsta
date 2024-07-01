import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
x:any;
  constructor() { }

  ngOnInit() {
  }
  myFunction() {
    this.x = document.getElementById("foot");
    if (this.x.className === "navbar") {
      this.x.className += " responsive";
    } else {
      this.x.className = "navbar";
    }
  }
}
