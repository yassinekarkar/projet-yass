import {Action} from '@ngrx/store';

export enum managementActionsTypes {
  getLanguages = '[languages management ]  get languages ',
  getLanguagesSuccess = '[languages management ]  get languages success',
  getLanguagesFailed = '[languages management ]  get languages failed',

  updateLanguage = '[languages management ]  update  language ',
  updateLanguageSuccess = '[languages management ] update  language  success',
  updateLanguageFailed = '[languages management ]  update  language  failed',

  createLanguage = '[languages management ]  create  language ',
  createLanguageSuccess = '[languages management ] create  language  success',
  createLanguageFailed = '[languages management ]  create  language  failed',

  ThrowError = '[languages management] throw error'

}
 

  export class getLanguages implements Action {
    readonly type = managementActionsTypes.getLanguages;

    constructor(public request: any) {
    }
  }

  export class getLanguagesSuccess implements Action {
    readonly type = managementActionsTypes.getLanguagesSuccess ;

    constructor(public payload: any) {
    }
  }

  export class getLanguagesFailed implements Action {
    readonly type = managementActionsTypes.getLanguagesFailed;

    constructor(public payload: any) {
    }
  }

export class updateLanguage implements Action {
  readonly type = managementActionsTypes.updateLanguage;

  constructor(public request: any) {
  }
}

export class updateLanguageSuccess implements Action {
  readonly type = managementActionsTypes.updateLanguageSuccess;

  constructor(public payload: any) {
  }
}

export class updateLanguageFailed implements Action {
  readonly type = managementActionsTypes.updateLanguageFailed;

  constructor(public payload: any) {
  }
}

export class createLanguage implements Action {
  readonly type = managementActionsTypes.createLanguage;

  constructor(public request: any) {
  }
}

export class createLanguageSuccess implements Action {
  readonly type = managementActionsTypes.createLanguageSuccess;

  constructor(public payload: any) {
  }
}

export class createLanguageFailed implements Action {
  readonly type = managementActionsTypes.createLanguageFailed;

  constructor(public payload: any) {
  }
}


  export class ThrowError implements Action {
    readonly type = managementActionsTypes.ThrowError;

    constructor(public payload: any) {
    }
  }

  export type LanguagesActions =
    getLanguages
    | getLanguagesSuccess
    | getLanguagesFailed
    | updateLanguage
    | updateLanguageSuccess
    | updateLanguageFailed
    | createLanguage
    | createLanguageSuccess
    | createLanguageFailed
    | ThrowError ;
 