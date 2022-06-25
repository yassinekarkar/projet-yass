import { NgModule } from '@angular/core';
import {SharedModule} from "../../../shared";
import {BillsRoutingModule} from "./bills-routing.module";
import {BillsComponent} from "./bills.component";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [BillsComponent],
  imports: [
    BillsRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  exports:[
    SharedModule,
  ]
})
export class BillsModule { }
