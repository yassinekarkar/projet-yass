import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {CorsInterceptor} from "../core/intercptors/core-interceptor";
import {ErrorInterceptor} from "../core/intercptors/error.interceptor";
import {LoaderInterceptor} from "../core/intercptors/loader.interceptor";

import {AuthenticationEffects} from "../core/store-layer/authentication/authentication.effects";
import {authenticationReducer} from "../core/store-layer/authentication/authentication.reducer";
import {CountriesEffects} from "../core/store-layer/countries/countries.effects";
import {countriesReducer} from "../core/store-layer/countries/countries.reducer";
import {paymentConditionsReducer} from "../core/store-layer/payment_condition/payment_condition.reducer";
import {PaymentConditionsEffects} from "../core/store-layer/payment_condition/paymentCondition.effects";
import {UnitiesEffects} from "../core/store-layer/unities/unities.effects";
import {unitiesReducer} from "../core/store-layer/unities/unities.reducer";
import {IbansEffects} from "../core/store-layer/ibans/ibans.effects";
import {ibansReducer} from "../core/store-layer/ibans/ibans.reducer";
import {PreloaderComponent} from "../preloader/preloader.component";
import {SharedModule} from "../shared";

import { Add_productComponent } from '../features/pages/products/add_product/add_product.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import fr from '@angular/common/locales/fr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {AuthComponent} from "./auth/auth.component";
import {RegisterComponent} from "./register/register.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import { vatsReducer } from 'src/core/store-layer/vats/vats.reducer';
import { VatsEffects } from 'src/core/store-layer/vats/vats.effects';
import { languagesReducer } from 'src/core/store-layer/languages/languages.reducer';
import { LanguagesEffects } from 'src/core/store-layer/languages/languages.effects';
import { currenciesReducer } from 'src/core/store-layer/currencies/currencies.reducer';
import { CurrenciesEffects } from 'src/core/store-layer/currencies/currencies.effects';


registerLocaleData(fr);

export const HTTP_LOADER_FACTORY = (httpClient: HttpClient) =>
  new TranslateHttpLoader(httpClient, 'assets/json/i18n/', '.json');


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    AuthComponent,
    PreloaderComponent,


  ],
  exports:[
    SharedModule,
    AuthComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HTTP_LOADER_FACTORY,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

    StoreModule.forFeature('authentication', authenticationReducer),
    StoreModule.forFeature('countries', countriesReducer),
    StoreModule.forFeature('unities', unitiesReducer),
    StoreModule.forFeature('paymentConditions', paymentConditionsReducer),
    StoreModule.forFeature('vats',vatsReducer),
    StoreModule.forFeature('ibans',ibansReducer),
    StoreModule.forFeature('languages', languagesReducer),
    StoreModule.forFeature('currencies', currenciesReducer),
    EffectsModule.forFeature([
      AuthenticationEffects,
      CountriesEffects,
      UnitiesEffects,
      PaymentConditionsEffects,
      VatsEffects,
      IbansEffects,
      LanguagesEffects,
      CurrenciesEffects
    ]),

    StoreDevtoolsModule.instrument({
      name: 'El-Bill',
      maxAge: 25,
      logOnly: true
    }),


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CorsInterceptor, multi: true} ,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true} ,
    { provide: NZ_I18N, useValue: fr_FR },

  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
