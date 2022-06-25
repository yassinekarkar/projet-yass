import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  HomeFill,
  FolderOutline,
  DashboardOutline,
  TeamOutline,
  BookOutline
} from '@ant-design/icons-angular/icons';

const ICONS = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  HomeFill,
  FolderOutline,
  DashboardOutline,
  TeamOutline,
  BookOutline
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: ICONS }
  ]
})
export class IconsProviderModule {
}
