import * as actions from './ibans.actions';

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IIBan} from "../../interfaces";

export interface ManagementState {
  error: any,
  ibans: IIBan[],
  ibanUpdate: IIBan,
  newIban: IIBan,

}

const initialState: ManagementState = {
  error: null,
  ibans: null,
  ibanUpdate: null,
  newIban: null,
};

const getFeatureManagementState = createFeatureSelector<ManagementState>('ibans');

export const getIbansList = createSelector(
  getFeatureManagementState,
  state => {
    return state.ibans;
  }
);

export const getIbanUpdated = createSelector(
  getFeatureManagementState,
  state => {
    return state.ibanUpdate;
  }
);


export const addNewIban = createSelector(
  getFeatureManagementState,
  state => {
    return state.newIban;
  }
);


export function ibansReducer(state = initialState, action: any) {
  switch (action.type) {

    case actions.managementActionsTypes.getIbansSuccess: {
      return {
        ...state,
        ibans: action.payload,
      };
    }

    case actions.managementActionsTypes.updateIbanSuccess: {
      return {
        ...state,
        ibanUpdate: action.payload,
      };
    }
    case actions.managementActionsTypes.createIbanSuccess: {

      return {
        ...state,
        newIban: action.payload,
      };
    }

    case actions.managementActionsTypes.updateIbanFailed:
      return {...state, error: action};

    case actions.managementActionsTypes.getIbansFailed:
      return {...state, error: action};

    default:
      return state;
  }
}

