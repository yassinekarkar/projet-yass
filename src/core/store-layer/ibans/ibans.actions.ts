import {Action} from '@ngrx/store';

export enum managementActionsTypes {
  getIbans = '[ibans management ]  get ibans ',
  getIbansSuccess = '[ibans management ]  get ibans success',
  getIbansFailed = '[ibans management ]  get ibans failed',

  updateIban = '[ibans management ]  update  iban ',
  updateIbanSuccess = '[ibans management ] update  iban  success',
  updateIbanFailed = '[ibans management ]  update  iban  failed',

  createIban = '[ibans management ]  create  iban ',
  createIbanSuccess = '[ibans management ] create  iban  success',
  createIbanFailed = '[ibans management ]  create  iban  failed',

  ThrowError = '[ibans management] throw error'

} 


  export class getIbans implements Action {
    readonly type = managementActionsTypes.getIbans;

    constructor(public request: any) {
    }
  }

  export class getIbansSuccess implements Action {
    readonly type = managementActionsTypes.getIbansSuccess ;

    constructor(public payload: any) {
    }
  }

  export class getIbansFailed implements Action {
    readonly type = managementActionsTypes.getIbansFailed;

    constructor(public payload: any) {
    }
  }

export class updateIban implements Action {
  readonly type = managementActionsTypes.updateIban;

  constructor(public request: any) {
  }
}

export class updateIbanSuccess implements Action {
  readonly type = managementActionsTypes.updateIbanSuccess;

  constructor(public payload: any) {
  }
}

export class updateIbanFailed implements Action {
  readonly type = managementActionsTypes.updateIbanFailed;

  constructor(public payload: any) {
  }
}

export class createIban implements Action {
  readonly type = managementActionsTypes.createIban;

  constructor(public request: any) {
  }
}

export class createIbanSuccess implements Action {
  readonly type = managementActionsTypes.createIbanSuccess;

  constructor(public payload: any) {
  }
}

export class createIbanFailed implements Action {
  readonly type = managementActionsTypes.createIbanFailed;

  constructor(public payload: any) {
  }
}


  export class ThrowError implements Action {
    readonly type = managementActionsTypes.ThrowError;

    constructor(public payload: any) {
    }
  }

  export type IbansActions =
    getIbans
    | getIbansSuccess
    | getIbansFailed
    | updateIban
    | updateIbanSuccess
    | updateIbanFailed
    | createIban
    | createIbanSuccess
    | createIbanFailed
    | ThrowError ;
