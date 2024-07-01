import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  x:any;
  constructor() { }

  ngOnInit() {
  }
  myFunction() {
    this.x = document.getElementById("nav");
    if (this.x.className === "navbar") {
      this.x.className += " responsive";
    } else {
      this.x.className = "navbar";
    }
  }

}
