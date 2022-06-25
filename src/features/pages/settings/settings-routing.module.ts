import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsComponent} from "./settings.component";


const ROUTES: Routes = [
  { path: '',
    component: SettingsComponent,
    children: [
      { path: '', redirectTo: 'settings', pathMatch: 'full' },
      { path: 'settings',     component: SettingsComponent ,
        data: {
          seo: {
            title: 'ELBill - Paramètres'
          }
        }
      }

    ] },

];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
