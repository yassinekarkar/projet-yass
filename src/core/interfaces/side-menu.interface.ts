export interface ISideMenuButtonGroup {
  title?: string;
  children: ISideMenuButton[];
}

export interface ISideMenuButton {
  url: string;
  name: string;
  icon?: string;
  iconTheme?: 'fill' | 'outline'| 'twotone';
  iconPath?: string;
  disabled?: boolean;
}
