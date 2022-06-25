import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BillsComponent} from "./bills.component";


const ROUTES: Routes = [
  { path: '',
    component: BillsComponent,
    children: [
      { path: '', redirectTo: 'bills', pathMatch: 'full' },
      { path: 'bills',     component: BillsComponent ,
        data: {
          seo: {
            title: 'ELBill - Les Factures'
          }
        }
      }

    ] },

];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class BillsRoutingModule { }
