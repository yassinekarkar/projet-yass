import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";

import {SharedModule} from "../shared";

import {MainHeaderComponent} from "./components/main-header/main-header.component";
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {FeaturesRoutingModule} from "./features-routing.module";
import {FeaturesComponent} from "./features.component";
import {ClientModule} from "./pages/client/client.module";
import {SettingsModule} from "./pages/settings/settings.module";



const SHARED_COMPONENTS = [
  MainHeaderComponent,
  SideBarComponent
]

@NgModule({
  declarations: [
    FeaturesComponent ,
    ...SHARED_COMPONENTS
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    TranslateModule,
  ],
  exports:[
    SharedModule,
    ...SHARED_COMPONENTS,


  ]
})
export class FeaturesModule { }
