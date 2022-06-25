import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Add_productComponent } from './add_product/add_product.component';
import { Edit_productComponent } from './edit_product/edit_product.component';
import { Affiche_detailsComponent } from './affiche_details/affiche_details.component';
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

 
{ path: 'products/add_product',     component: Add_productComponent ,
     data: {
       seo: {
         title: 'ELBill - add Produits'
       }
     }
   },

   { path: 'products/edit_product/:id',     component: Edit_productComponent ,
   data: {
     seo: {
       title: 'ELBill - Edit Produit'
     }
   }
 },   

 { path: 'products/details_product/:id',     component: Affiche_detailsComponent ,
 data: {
   seo: {
     title: 'ELBill - Afficher le details'
   }
 }
},   

 
 
];
@NgModule({
 imports: [RouterModule.forChild(ROUTES)],
 exports: [RouterModule]
})
export class ProductsRoutingModule { }
 

