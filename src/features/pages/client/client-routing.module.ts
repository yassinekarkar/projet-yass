import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Add_clientComponent } from './add_client/add_client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { Affiche_detailsComponent } from './affiche_details/affiche_details.component';
import { ClientComponent } from './client.component';

const ROUTES: Routes = [
 /* { path: '', component: ClientComponent,
    children: [
      { path: '', redirectTo: 'my-clients', pathMatch: 'full' },
      { path: 'my-clients',     component: ClientComponent ,
        data: {
          seo: {
            title: 'ELBill - Les Clients'
          }
        }
      }

    ] },*/

    { path: '', component: ClientComponent },  
    {
      path: '', redirectTo: 'my-clients', pathMatch: 'full' 
    },
    { path: 'my-clients',     component: ClientComponent ,
       data: {
         seo: {
           title: 'ELBill - Les Clients'
         }
       }
     },

     { path: 'my-clients/add_client',     component: Add_clientComponent ,
     data: {
       seo: {
         title: 'ELBill - add Client'
       }
     }
   },

   { path: 'my-clients/edit_client/:id',     component: EditClientComponent ,
   data: {
     seo: {
       title: 'ELBill - Edit Client'
     }
   }
 },   

 { path: 'my-clients/details_client/:id',     component: Affiche_detailsComponent ,
   data: {
     seo: {
       title: 'ELBill - Edit Client'
     }
   }
 },   


];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
