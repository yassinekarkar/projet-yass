import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./products.component";
  
 
const ROUTES: Routes = [
 { path: '', component: ProductsComponent },

 {
  path: '', redirectTo: 'products', pathMatch: 'full' 
},
{ path: 'products',     component: ProductsComponent ,
       data: {
         seo: {
           title: 'ELBill - Mes Produits'
         }
       }
     },
];
@NgModule({
 imports: [RouterModule.forChild(ROUTES)],
 exports: [RouterModule]
})
export class ProductsRoutingModule { }
 

