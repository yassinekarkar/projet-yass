import * as actions from './countries.actions';

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ICountry} from "../../interfaces";

export interface ManagementState {
  error: any,
  countries: ICountry[],
  countryUpdate: ICountry,
  newCountry: ICountry,

}

const initialState: ManagementState = {
  error: null,
  countries: null,
  countryUpdate: null,
  newCountry: null,
};

const getFeatureManagementState = createFeatureSelector<ManagementState>('countries');

export const getCountriesList = createSelector(
  getFeatureManagementState,
  state => {
    return state.countries;
  }
);

export const getCountryUpdated = createSelector(
  getFeatureManagementState,
  state => {
    return state.countryUpdate;
  }
);


export const addNewCountry = createSelector(
  getFeatureManagementState,
  state => {
    console.log("State",state); 
    return state.newCountry;
  }
);


export function countriesReducer(state = initialState, action: any) {
  switch (action.type) {

    case actions.managementActionsTypes.getCountriesSuccess: {
      return {
        ...state,
        countries: action.payload,
      };
    }

    case actions.managementActionsTypes.updateCountrySuccess: {
      return {
        ...state,
        countryUpdate: action.payload,
      };
    }
    case actions.managementActionsTypes.createCountrySuccess: {
      console.log("payload",action.payload)
      return {
        ...state,
        newCountry: action.payload,
      };
    }

    case actions.managementActionsTypes.updateCountryFailed:
      return {...state, error: action};

    case actions.managementActionsTypes.getCountriesFailed:
      return {...state, error: action};

    default:
      return state;
  }
}

