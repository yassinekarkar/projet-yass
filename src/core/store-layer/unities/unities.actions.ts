import {Action} from '@ngrx/store';

export enum managementActionsTypes {
  getUnities = '[unities management ]  get unities ',
  getUnitiesSuccess = '[unities management ]  get unities success',
  getUnitiesFailed = '[unities management ]  get unities failed',

  updateUnity = '[unities management ]  update  unity ',
  updateUnitySuccess = '[unities management ] update  unity  success',
  updateUnityFailed = '[unities management ]  update  unity  failed',

  createUnity = '[unities management ]  create  unity ',
  createUnitySuccess = '[unities management ] create  unity  success',
  createUnityFailed = '[unities management ]  create  unity  failed',

  ThrowError = '[unities management] throw error'
 
}


  export class getUnities implements Action {
    readonly type = managementActionsTypes.getUnities;

    constructor(public request: any) {
    }
  }

  export class getUnitiesSuccess implements Action {
    readonly type = managementActionsTypes.getUnitiesSuccess ;

    constructor(public payload: any) {
    }
  }

  export class getUnitiesFailed implements Action {
    readonly type = managementActionsTypes.getUnitiesFailed;

    constructor(public payload: any) {
    }
  }

export class updateUnity implements Action {
  readonly type = managementActionsTypes.updateUnity;

  constructor(public request: any) {
  }
}

export class updateUnitySuccess implements Action {
  readonly type = managementActionsTypes.updateUnitySuccess;

  constructor(public payload: any) {
  }
}

export class updateUnityFailed implements Action {
  readonly type = managementActionsTypes.updateUnityFailed;

  constructor(public payload: any) {
  }
}

export class createUnity implements Action {
  readonly type = managementActionsTypes.createUnity;

  constructor(public request: any) {
  }
}

export class createUnitySuccess implements Action {
  readonly type = managementActionsTypes.createUnitySuccess;

  constructor(public payload: any) {
  }
}

export class createUnityFailed implements Action {
  readonly type = managementActionsTypes.createUnityFailed;

  constructor(public payload: any) {
  }
}


  export class ThrowError implements Action {
    readonly type = managementActionsTypes.ThrowError;

    constructor(public payload: any) {
    }
  }

  export type UnitiesActions =
    getUnities
    | getUnitiesSuccess
    | getUnitiesFailed
    | updateUnity
    | updateUnitySuccess
    | updateUnityFailed
    | createUnity
    | createUnitySuccess
    | createUnityFailed
    | ThrowError ;
 