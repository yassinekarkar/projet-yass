import { NgModule } from '@angular/core';
import {SharedModule} from "../../../shared";
import {SettingsRoutingModule} from "./settings-routing.module";
import {SettingsComponent} from "./settings.component";
import { UnitiesComponent } from './tabsList/unities/unities.component';
import { UsersComponent } from './tabsList/users/users.component';
import { PaymentConditionsComponent } from './tabsList/payment-conditions/payment-conditions.component';
import { VatsComponent } from './tabsList/vats/vats.component';
import { IbansComponent } from './tabsList/ibans/ibans.component';

@NgModule({
  declarations: [
    SettingsComponent,
    UnitiesComponent,
    UsersComponent,
    PaymentConditionsComponent,
    VatsComponent,
    IbansComponent
  ],
  imports: [
    SettingsRoutingModule,
    SharedModule,
  ],
  exports:[
    SharedModule,
  ]
})
export class SettingsModule { }
