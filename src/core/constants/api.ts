import {environment} from "../../environments/environment";

const ENV = environment.apiUrl ;

export const APIS  = {
  AUTHENTICATION: {
    LOGIN: {url: `${ENV}/authenticate`, method: 'POST'},
    SUBSCRIBE: {url: `${ENV}/front/subscribe`, method: 'POST'},
  },
  COUNTRIES: {
    COUNTRIES_FRONT: {url: `${ENV}/front/countries/choices`, method: 'GET'},
    COUNTRIES_FRONT_CHOICES: {url: `${ENV}/front/countries/choices`, method: 'GET'},
    COUNTRY_FRONT: {url: `${ENV}/front/country`, method: 'GET'},
    COUNTRY_BACK_POST: {url:  `${ENV}/back/countries`, method: 'POST'},
    COUNTRY_BACK_PUT: {url:  `${ENV}/front/countries`, method: 'PUT'},
    COUNTRY_UPDATE: {url: `${ENV}/front/country/`, method: 'PUT'},
    COUNTRY_CREATE: {url: `${ENV}/front/country`, method: 'POST'},

  },
  UNITIES: {
    UNITIES_FRONT: {url: `${ENV}/front/unities/`, method: 'GET'},
    UNITIES_UPDATE: {url: `${ENV}/front/unity/`, method: 'PUT'},
    UNITIES_CREATE: {url: `${ENV}/front/unity`, method: 'POST'},

  },
  LANGUAGES: {
    LANGUAGES_FRONT: {url: `${ENV}/back/languages/`, method: 'GET'},
    LANGUAGES_UPDATE: {url: `${ENV}/back/language/`, method: 'PUT'},
    LANGUAGES_CREATE: {url: `${ENV}/back/language`, method: 'POST'},

  },
  CURRENCIES: {
    CURRENCIES_FRONT: {url: `${ENV}/front/currencies/`, method: 'GET'},
    CURRENCIES_UPDATE: {url: `${ENV}/front/currency/`, method: 'PUT'},
    CURRENCIES_CREATE: {url: `${ENV}/front/currency`, method: 'POST'},

  },
  VATS: {
    VATS_FRONT: {url: `${ENV}/front/vats/`, method: 'GET'},
    VATS_UPDATE: {url: `${ENV}/front/vat/`, method: 'PUT'},
    VATS_CREATE: {url: `${ENV}/front/vat`, method: 'POST'},

  },
  PAYMENT_CONDITIONS: {
    PAYMENT_CONDITIONS_FRONT: {url: `${ENV}/front/payment-conditions`, method: 'GET'},
    PAYMENT_CONDITIONS_UPDATE: {url: `${ENV}/front/payment-condition/`, method: 'PUT'},
    PAYMENT_CONDITIONS_CREATE: {url: `${ENV}/front/payment-condition`, method: 'POST'},
  },
  IBANS: {
    IBANS_FRONT: {url: `${ENV}/front/ibans/`, method: 'GET'},
    IBANS_UPDATE: {url: `${ENV}/front/iban/`, method: 'PUT'},
    IBANS_CREATE: {url: `${ENV}/front/iban`, method: 'POST'},

  },
  CLIENTS: {
    CLIENTS_FRONT: {url: `${ENV}/front/clients`, method: 'GET'},
    CLIENTS_CREATE: {url: `${ENV}/front/client`, method: 'POST'},
  },
  PRODUCTS: {
    PRODUCTS_FRONT: {url: `${ENV}/front/products`, method: 'GET'},
    PRODUCTS_CREATE: {url: `${ENV}/front/product`, method: 'POST'},
  },

  QUOTES: {
    QUOTES_FRONT: {url: `${ENV}/front/quotes`, method: 'GET'},
    QUOTES_CREATE: {url: `${ENV}/front/quote`, method: 'POST'},
  }, 

  BILLS: {
    BILLS_FRONT: {url: `${ENV}/front/factures`, method: 'GET'},
    BILLS_CREATE: {url: `${ENV}/front/facture`, method: 'POST'},
  }



}
