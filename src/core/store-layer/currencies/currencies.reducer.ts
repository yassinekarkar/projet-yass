import * as actions from './currencies.actions';

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ICurrency} from "../../interfaces";

export interface ManagementState {
  error: any,
  currencies: ICurrency[],
  currencyUpdate: ICurrency,
  newCurrency: ICurrency,

}

const initialState: ManagementState = {
  error: null,
  currencies: null,
  currencyUpdate: null,
  newCurrency: null,
};

const getFeatureManagementState = createFeatureSelector<ManagementState>('currencies');

export const getCurrenciesList = createSelector(
  getFeatureManagementState,
  state => {
    return state.currencies;
  }
);

export const getCurrencyUpdated = createSelector(
  getFeatureManagementState,
  state => {
    return state.currencyUpdate;
  }
);


export const addNewCurrency = createSelector(
  getFeatureManagementState,
  state => {
    return state.newCurrency;
  }
);


export function currenciesReducer(state = initialState, action: any) {
  switch (action.type) {

    case actions.managementActionsTypes.getCurrenciesSuccess: {
      return {
        ...state,
        currencies: action.payload,
      };
    }

    case actions.managementActionsTypes.updateCurrencySuccess: {
      return {
        ...state,
        currencyUpdate: action.payload,
      };
    }
    case actions.managementActionsTypes.createCurrencySuccess: {

      return {
        ...state,
        newCurrency: action.payload,
      };
    }

    case actions.managementActionsTypes.updateCurrencyFailed:
      return {...state, error: action};

    case actions.managementActionsTypes.getCurrenciesFailed:
      return {...state, error: action};

    default:
      return state;
  }
}
 
