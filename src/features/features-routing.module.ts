import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeaturesComponent} from "./features.component";


const ROUTES: Routes = [
  { path: '',
    component: FeaturesComponent,

    children: [
      { path: '', redirectTo: 'my-clients', pathMatch: 'full' },
      { path: '', loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule) } ,
      { path: '', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
      { path: '', loadChildren: () => import('./pages/quote/quote.module').then(m => m.QuoteModule) },
      { path: '', loadChildren: () => import('./pages/bills/bills.module').then(m => m.BillsModule) },
      { path: '', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule) }
  


    ] },

];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
