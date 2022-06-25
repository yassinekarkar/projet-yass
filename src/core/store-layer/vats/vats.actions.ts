import {Action} from '@ngrx/store';

export enum managementActionsTypes {
  getVats = '[vats management ]  get vats ',
  getVatsSuccess = '[vats management ]  get vats success',
  getVatsFailed = '[vats management ]  get vats failed',

  updateVat = '[vats management ]  update  vat ',
  updateVatSuccess = '[vats management ] update  vat  success',
  updateVatFailed = '[vats management ]  update  vat  failed',

  createVat = '[vats management ]  create  vat ',
  createVatSuccess = '[vats management ] create  vat  success',
  createVatFailed = '[vats management ]  create  vat  failed',

  ThrowError = '[vats management] throw error'

}


  export class getVats implements Action {
    readonly type = managementActionsTypes.getVats;

    constructor(public request: any) {
    }
  }

  export class getVatsSuccess implements Action {
    readonly type = managementActionsTypes.getVatsSuccess ;

    constructor(public payload: any) {
    }
  }

  export class getVatsFailed implements Action {
    readonly type = managementActionsTypes.getVatsFailed;

    constructor(public payload: any) {
    }
  }

export class updateVat implements Action {
  readonly type = managementActionsTypes.updateVat;

  constructor(public request: any) {
  }
}

export class updateVatSuccess implements Action {
  readonly type = managementActionsTypes.updateVatSuccess;

  constructor(public payload: any) {
  }
}

export class updateVatFailed implements Action {
  readonly type = managementActionsTypes.updateVatFailed;

  constructor(public payload: any) {
  }
}

export class createVat implements Action {
  readonly type = managementActionsTypes.createVat;

  constructor(public request: any) {
  }
}

export class createVatSuccess implements Action {
  readonly type = managementActionsTypes.createVatSuccess;

  constructor(public payload: any) {
  }
}

export class createVatFailed implements Action {
  readonly type = managementActionsTypes.createVatFailed;

  constructor(public payload: any) {
  }
}


  export class ThrowError implements Action {
    readonly type = managementActionsTypes.ThrowError;

    constructor(public payload: any) {
    }
  }

  export type VatsActions =
    getVats
    | getVatsSuccess
    | getVatsFailed
    | updateVat
    | updateVatSuccess
    | updateVatFailed
    | createVat
    | createVatSuccess
    | createVatFailed
    | ThrowError ;
