import { NgModule } from '@angular/core';
import {SharedModule} from "../../../shared";
import {QuoteRoutingModule} from "./quote-routing.module";
import {QuoteComponent} from "./quote.component";
import { HttpClientModule } from '@angular/common/http';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { CommonModule } from '@angular/common';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';




@NgModule({
  declarations: [QuoteComponent , AddQuoteComponent, EditQuoteComponent],
  imports: [
    QuoteRoutingModule,
    SharedModule,
    HttpClientModule,
    CommonModule
  ],
  exports:[
    SharedModule,
  ]
})
export class QuoteModule { }
