import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ClientComponent } from './client.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { AddClientComponent } from './add-client/add-client.component';

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

     { path: 'my-clients/add_client',     component: AddClientComponent ,
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

 { path: 'my-clients/details_client/:id',     component: DisplayDetailsComponent ,
   data: {
     seo: {
       title: 'ELBill - display details Client'
     }
   }
 },   


];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
