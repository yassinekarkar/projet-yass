import { NgModule } from '@angular/core';
import {HttpClient, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AntdModulesLoaderModule} from "./antd-modules-loader/antd-modules-loader";
import {CardSettingsComponent} from "./components/cardSettings/cardSettings.component";
import {ModalSettingsComponent} from "./components/modalSettings/modalSettings.component";
import { TableComponent } from './components/table/table.component';
import { PopAddComponent } from './components/pop-add/pop-add.component';
import { PopVerificationComponent } from './components/pop-verification/pop-verification.component';
import { DetailsAfficheComponent } from './components/details-affiche/details-affiche.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TotalComponent } from './components/total/total.component';
import { AlarmComponent } from './components/alarm/alarm.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {PaginationComponent} from "./pagination/pagination.component";
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ProductsModule } from 'src/features/pages/products/products.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { DisplayProductComponent } from './components/display-product/display-product.component';
import { DynammicFormComponent } from './components/dynammic-form/dynammic-form.component';


export const HTTP_LOADER_FACTORY = (httpClient: HttpClient) =>
  new TranslateHttpLoader(httpClient, '/assets/json/i18n/', '.json');

const SHARED_COMPONENTS = [
  TableComponent,
  PopAddComponent,
  PopVerificationComponent,
  DetailsAfficheComponent,
  SubHeaderComponent,
  SearchBarComponent,
  TotalComponent,
  AlarmComponent,
  PaginationComponent,
  CardSettingsComponent,
  ModalSettingsComponent,
  DynammicFormComponent,
];
@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    AddProductComponent,
    AddClientComponent,
    EditProductComponent,
    DisplayProductComponent,
  ],
  exports: [
    ...SHARED_COMPONENTS,
    TranslateModule,
    AntdModulesLoaderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
  ],
  imports: [
    NzNotificationModule,
    AntdModulesLoaderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HTTP_LOADER_FACTORY,
        deps: [HttpClient],
      }
    }),
  ]
})
export class SharedModule { }
