import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NzIconModule} from "ng-zorro-antd/icon";
import { IconsProviderModule } from "./icons-provider.module";
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSelectModule } from 'ng-zorro-antd/select';

const NZ_MODULES = [
  CommonModule,
  NzInputModule,
  NzAvatarModule,
  NzFormModule,
  NzMenuModule,
  IconsProviderModule,
  NzButtonModule,
  NzIconModule,
  NzDropDownModule,
  NzLayoutModule,
  CommonModule,
  NzDescriptionsModule,
  NzTabsModule,
  NzTableModule,
  NzBadgeModule,
  NzSpinModule,
  NzCardModule,
  NzPopoverModule,
  NzModalModule,
  NzPaginationModule,
  NzSelectModule
]


@NgModule({
  imports: [

    IconsProviderModule,
    ...NZ_MODULES
  ],
  exports: [
    IconsProviderModule,
    ...NZ_MODULES
  ]
})
export class AntdModulesLoaderModule {
}
