import {Action} from '@ngrx/store';

export enum managementActionsTypes {
  getCountries = '[countries management ]  get countries ',
  getCountriesSuccess = '[countries management ]  get countries success',
  getCountriesFailed = '[countries management ]  get countries failed',

  updateCountry = '[countries management ]  update  country ',
  updateCountrySuccess = '[countries management ] update  country  success',
  updateCountryFailed = '[countries management ]  update  country  failed',

  createCountry = '[countries management ]  create  country ',
  createCountrySuccess = '[countries management ] create  country  success',
  createCountryFailed = '[countries management ]  create  country  failed',

  ThrowError = '[countries management] throw error'

}


  export class getCountries implements Action {
    readonly type = managementActionsTypes.getCountries;

    constructor(public request: any) {
    }
  }

  export class getCountriesSuccess implements Action {
    readonly type = managementActionsTypes.getCountriesSuccess ;

    constructor(public payload: any) {
    }
  }

  export class getCountriesFailed implements Action {
    readonly type = managementActionsTypes.getCountriesFailed;

    constructor(public payload: any) {
    }
  }

export class updateCountry implements Action {
  readonly type = managementActionsTypes.updateCountry;

  constructor(public request: any) {
  }
}

export class updateCountrySuccess implements Action {
  readonly type = managementActionsTypes.updateCountrySuccess;

  constructor(public payload: any) {
  }
}

export class updateCountryFailed implements Action {
  readonly type = managementActionsTypes.updateCountryFailed;

  constructor(public payload: any) {
  }
}

export class createCountry implements Action {
  readonly type = managementActionsTypes.createCountry;

  constructor(public request: any) {
  }
}

export class createCountrySuccess implements Action {
  readonly type = managementActionsTypes.createCountrySuccess;

  constructor(public payload: any) {
  }
}

export class createCountryFailed implements Action {
  readonly type = managementActionsTypes.createCountryFailed  ;

  constructor(public payload: any) {
  }
}


  export class ThrowError implements Action {
    readonly type = managementActionsTypes.ThrowError;

    constructor(public payload: any) {
    }
  }

  export type CountriesActions =
    getCountries
    | getCountriesSuccess
    | getCountriesFailed
    | updateCountry
    | updateCountrySuccess
    | updateCountryFailed
    | createCountry
    | createCountrySuccess
    | createCountryFailed
    | ThrowError ;
