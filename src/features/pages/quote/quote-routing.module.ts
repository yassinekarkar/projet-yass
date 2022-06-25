import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuoteComponent} from "./quote.component";
import { AddQuoteComponent } from './add-quote/add-quote.component';

import { Affiche_detailsComponent } from './affiche_details/affiche_details.component';
import { Edit_quoteComponent } from './edit_quote/edit_quote.component';

const ROUTES: Routes = [
  { path: '', component: QuoteComponent },
  {
    path: '', redirectTo: 'quotes', pathMatch: 'full' 
  },
  { path: 'quotes',     component: QuoteComponent ,
       data: {
         seo: {
           title: 'ELBill - Les Devis'
         }
       }
     },
     { path: 'quotes/add_quote',     component: AddQuoteComponent ,
     data: {
       seo: {
         title: 'ELBill - add Devis'
       }
     }
   },
   { path: 'quotes/details_quote/:id',     component: Affiche_detailsComponent ,
   data: {
     seo: {
       title: 'ELBill - Afficher le details de quote'
     }
   }
  },   
  { path: 'quotes/edit_quote/:id',     component: Edit_quoteComponent ,
  data: {
    seo: {
      title: 'ELBill - Edit Quote'
    }
  }
},   



];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
 