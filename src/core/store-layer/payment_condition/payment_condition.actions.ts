import {Action} from '@ngrx/store';

export enum managementActionsTypes {
  getPaymentConditions = '[paymentConditions management ]  get paymentConditions ',
  getPaymentConditionsSuccess = '[paymentConditions management ]  get paymentConditions success',
  getPaymentConditionsFailed = '[paymentConditions management ]  get paymentConditions failed',

  updatePaymentCondition = '[paymentConditions management ]  update  paymentCondition ',
  updatePaymentConditionSuccess = '[paymentConditions management ] update  paymentCondition success',
  updatePaymentConditionFailed = '[paymentConditions management ]  update  paymentCondition failed',

  createPaymentCondition = '[paymentConditions management ]  create  paymentCondition ',
  createPaymentConditionSuccess = '[paymentConditions management ] create  paymentCondition success',
  createPaymentConditionFailed = '[paymentConditions management ]  create  paymentCondition failed',

  ThrowError = '[paymentConditions management] throw error'

}


  export class getPaymentConditions implements Action {
    readonly type = managementActionsTypes.getPaymentConditions;

    constructor(public request: any) {
    }
  }

  export class getPaymentConditionsSuccess implements Action {
    readonly type = managementActionsTypes.getPaymentConditionsSuccess ;

    constructor(public payload: any) {
    }
  }

  export class getPaymentConditionsFailed implements Action {
    readonly type = managementActionsTypes.getPaymentConditionsFailed;

    constructor(public payload: any) {
    }
  }

export class updatePaymentCondition implements Action {
  readonly type = managementActionsTypes.updatePaymentCondition;

  constructor(public request: any) {
  }
}

export class updatePaymentConditionSuccess implements Action {
  readonly type = managementActionsTypes.updatePaymentConditionSuccess;

  constructor(public payload: any) {
  }
}

export class updatePaymentConditionFailed implements Action {
  readonly type = managementActionsTypes.updatePaymentConditionFailed;

  constructor(public payload: any) {
  }
}

export class createPaymentCondition implements Action {
  readonly type = managementActionsTypes.createPaymentCondition;

  constructor(public request: any) {
  }
}

export class createPaymentConditionSuccess implements Action {
  readonly type = managementActionsTypes.createPaymentConditionSuccess;

  constructor(public payload: any) {
  }
}

export class createPaymentConditionFailed implements Action {
  readonly type = managementActionsTypes.createPaymentConditionFailed;

  constructor(public payload: any) {
  }
}


  export class ThrowError implements Action {
    readonly type = managementActionsTypes.ThrowError;

    constructor(public payload: any) {
    }
  }

  export type PaymentConditionsActions =
    getPaymentConditions
    | getPaymentConditionsSuccess
    | getPaymentConditionsFailed
    | updatePaymentCondition
    | updatePaymentConditionSuccess
    | updatePaymentConditionFailed
    | createPaymentCondition
    | createPaymentConditionSuccess
    | createPaymentConditionFailed
    | ThrowError ;
 