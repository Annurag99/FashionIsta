import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Service/app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { OrderbagComponent } from './orderbag/orderbag.component';
import { EachcardsComponent } from './eachcards/eachcards.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './Service/product.service';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    OrderbagComponent,
    EachcardsComponent,
    EditProductComponent,
    ProductdetailsComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule ,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
