import {Action} from '@ngrx/store';

export enum managementActionsTypes {
  login = '[authentication management ] front user login',
  loginSuccess = '[authentication management ] front user login success',
  loginFailed = '[authentication management ] front user login failed',
  ThrowError = '[authentication management] throw error'

}


  export class Login implements Action {
    readonly type = managementActionsTypes.login;

    constructor(public request: any) {
    }
  }

  export class LoginSuccess implements Action {
    readonly type = managementActionsTypes.loginSuccess;

    constructor(public payload: any) {
    }
  }

  export class LoginFailed implements Action {
    readonly type = managementActionsTypes.loginFailed;

    constructor(public payload: any) {
    }
  }

  export class ThrowError implements Action {
    readonly type = managementActionsTypes.ThrowError;

    constructor(public payload: any) {
    }
  }

  export type authenticationActions =
    Login
    | LoginSuccess
    | LoginFailed
    | ThrowError ;
