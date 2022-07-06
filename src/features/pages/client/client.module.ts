import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {SharedModule} from "../../../shared";
import { EditClientComponent } from './edit-client/edit-client.component'
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { AddClientComponent } from './add-client/add-client.component';

@NgModule({
  declarations: [ClientComponent, EditClientComponent, DisplayDetailsComponent, AddClientComponent],
  imports: [
    ClientRoutingModule,
    SharedModule,
    HttpClientModule,
    NzTabsModule
  ],

  exports:[
    SharedModule,
  ],
})
export class ClientModule { } 
