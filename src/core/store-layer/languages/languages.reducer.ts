import * as actions from './languages.actions';

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ILanguage} from "../../interfaces";

export interface ManagementState {
  error: any,
  languages: ILanguage[],
  languageUpdate: ILanguage,
  newLanguage: ILanguage,

} 
 
const initialState: ManagementState = {
  error: null,
  languages: null,
  languageUpdate: null,
  newLanguage: null,
};

const getFeatureManagementState = createFeatureSelector<ManagementState>('languages');

export const getLanguagesList = createSelector(
  getFeatureManagementState,
  state => {
    return state.languages;
  }
);

export const getLanguageUpdated = createSelector(
  getFeatureManagementState,
  state => {
    return state.languageUpdate;
  }
);


export const addNewLanguage = createSelector(
  getFeatureManagementState,
  state => {
    return state.newLanguage;
  }
);


export function languagesReducer(state = initialState, action: any) {
  switch (action.type) {

    case actions.managementActionsTypes.getLanguagesSuccess: {
      return {
        ...state,
        languages: action.payload,
      };
    }

    case actions.managementActionsTypes.updateLanguageSuccess: {
      return {
        ...state,
        languageUpdate: action.payload,
      };
    }
    case actions.managementActionsTypes.createLanguageSuccess: {

      return {
        ...state,
        newLanguage: action.payload,
      };
    }

    case actions.managementActionsTypes.updateLanguageFailed:
      return {...state, error: action};

    case actions.managementActionsTypes.getLanguagesFailed:
      return {...state, error: action};

    default:
      return state;
  }
}
 
