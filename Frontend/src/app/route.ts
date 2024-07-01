import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { OrderbagComponent } from './orderbag/orderbag.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
export const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home' , component:  HomeComponent},
    { path: 'products' , component:  ProductsComponent},
    { path: 'orderbag' , component:  OrderbagComponent},
    {path: 'productdetails/:id', component: ProductdetailsComponent},
    { path: 'addproduct', component: AddProductComponent },
    { path: 'editproduct/:id', component: EditProductComponent }
];
