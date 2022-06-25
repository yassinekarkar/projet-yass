import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {SharedModule} from "../../../shared";
import { Add_clientComponent } from './add_client/add_client.component'
import { EditClientComponent } from './edit-client/edit-client.component'
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';



@NgModule({
  declarations: [ClientComponent, Add_clientComponent, EditClientComponent],
  imports: [
    ClientRoutingModule,
    SharedModule,
    HttpClientModule
  ],

  exports:[
    SharedModule,
  ]
})
export class ClientModule { } 
