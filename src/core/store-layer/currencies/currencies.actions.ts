import {Action} from '@ngrx/store';

export enum managementActionsTypes {
  getCurrencies = '[unities management ]  get currencies ',
  getCurrenciesSuccess = '[currencies management ]  get currencies success',
  getCurrenciesFailed = '[currencies management ]  get currencies failed',

  updateCurrency = '[currencies management ]  update  currency ',
  updateCurrencySuccess = '[currencies management ] update  currency  success',
  updateCurrencyFailed = '[currencies management ]  update  currency  failed',

  createCurrency = '[currencies management ]  create  currency ',
  createCurrencySuccess = '[currencies management ] create  currency  success',
  createCurrencyFailed = '[currencies management ]  create  currency  failed',

  ThrowError = '[currencies management] throw error'
 
}


  export class getCurrencies implements Action {
    readonly type = managementActionsTypes.getCurrencies;

    constructor(public request: any) {
    }
  }

  export class getCurrenciesSuccess implements Action {
    readonly type = managementActionsTypes.getCurrenciesSuccess ;

    constructor(public payload: any) {
    }
  }

  export class getCurrenciesFailed implements Action {
    readonly type = managementActionsTypes.getCurrenciesFailed;

    constructor(public payload: any) {
    }
  }

export class updateCurrency implements Action {
  readonly type = managementActionsTypes.updateCurrency;

  constructor(public request: any) {
  }
}

export class updateCurrencySuccess implements Action {
  readonly type = managementActionsTypes.updateCurrencySuccess;

  constructor(public payload: any) {
  }
}

export class updateCurrencyFailed implements Action {
  readonly type = managementActionsTypes.updateCurrencyFailed;

  constructor(public payload: any) {
  }
}

export class createCurrency implements Action {
  readonly type = managementActionsTypes.createCurrency;

  constructor(public request: any) {
  }
}

export class createCurrencySuccess implements Action {
  readonly type = managementActionsTypes.createCurrencySuccess;

  constructor(public payload: any) {
  }
}

export class createCurrencyFailed implements Action {
  readonly type = managementActionsTypes.createCurrencyFailed;

  constructor(public payload: any) {
  }
}


  export class ThrowError implements Action {
    readonly type = managementActionsTypes.ThrowError;

    constructor(public payload: any) {
    }
  }

  export type CurrenciesActions =
    getCurrencies
    | getCurrenciesSuccess
    | getCurrenciesFailed
    | updateCurrency
    | updateCurrencySuccess
    | updateCurrencyFailed
    | createCurrency
    | createCurrencySuccess
    | createCurrencyFailed
    | ThrowError ;
 