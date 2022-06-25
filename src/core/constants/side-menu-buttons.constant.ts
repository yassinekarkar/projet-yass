import {ISideMenuButtonGroup} from "../interfaces";
import {RoutesConstants} from "./routes.constants";

export const SIDE_MENU_BUTTONS: ISideMenuButtonGroup[] = [
  {
    children: [
      {
        name: 'buttons.dashboard',
        url: RoutesConstants.dashboard.home,
        icon: './assets/images/icons/plus.svg',
        disabled:true
      }
    ] 
  },
  {
    title: 'common.myClients',
    children: [
      {
        name: 'buttons.myClients',
        url: RoutesConstants.myClients.myClients,
        icon: './assets/images/icons/plus.svg',
        disabled:false
      },
    ]
  },
  {
    title: 'common.products',
    children: [
      {
        name: 'buttons.products',
        url: RoutesConstants.products.products,
        icon: './assets/images/icons/plus.svg',
        disabled:false
      },
    ]
  },
  {
    title: 'common.quotes',
    children: [
      {
        name: 'buttons.quotes',
        url: RoutesConstants.quotes.quotes,
        icon: './assets/images/icons/plus.svg',
        disabled:false
      },
    ]
  },
  {
    title: 'common.bills',
    children: [
      {
        name: 'buttons.bills',
        url: RoutesConstants.bills.bills,
        icon: './assets/images/icons/plus.svg',
        disabled:false
      },
    ]
  },
  {
    title: 'common.settings',
    children: [
      {
        name: 'buttons.settings',
        url: RoutesConstants.settings.settings,
        icon: './assets/images/icons/plus.svg',
        disabled:false
      },
    ]
  },


  ]
