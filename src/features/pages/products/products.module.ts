
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {SharedModule} from "../../../shared";
import { Add_productComponent } from './add_product/add_product.component';
import { Edit_productComponent } from './edit_product/edit_product.component'
import {ProductsRoutingModule} from "./products-routing.module";
import {ProductsComponent} from "./products.component";



@NgModule({
  declarations: [ProductsComponent , Add_productComponent, Edit_productComponent],
  imports: [
    ProductsRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  exports:[
    SharedModule,
  ]
})
export class ProductsModule { }
