
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {SharedModule} from "../../../shared";
import {ProductsRoutingModule} from "./products-routing.module";
import {ProductsComponent} from "./products.component";
import { AddProductComponent } from './add-product/add-product.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
  declarations: [ProductsComponent , AddProductComponent, DisplayDetailsComponent, EditProductComponent],
  imports: [
    ProductsRoutingModule,
    SharedModule,
    HttpClientModule,
    NzFormModule
  ],
  exports:[
    SharedModule,
  ]
})
export class ProductsModule { }
