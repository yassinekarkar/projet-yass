import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "../core";
import {AuthComponent} from "./auth/auth.component";
import {RegisterComponent} from "./register/register.component";
import {SignInComponent} from "./sign-in/sign-in.component";


const ROUTES: Routes = [
  // { path: '**', pathMatch: 'full', redirectTo: '' },
  { path: 'sign-in', component: SignInComponent ,
    data: {
      seo: {
        title: 'ELBill - Sign In'
      }
    }
    },
  {
    path: 'register', component: RegisterComponent,
    data: {
      seo: {
        title: 'ELBill - Register'
      }
    }
  },

  { path: '',   loadChildren: () => import('../features/features.module').then(m => m.FeaturesModule) }, // Under Develop canActivate: [AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
