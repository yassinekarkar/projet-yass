import * as actions from './vats.actions';

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IVat} from "../../interfaces";

export interface ManagementState {
  error: any,
  vats: IVat[],
  vatUpdate: IVat,
  newVat: IVat,
 
}

const initialState: ManagementState = {
  error: null,
  vats: null,
  vatUpdate: null,
  newVat: null,
};

const getFeatureManagementState = createFeatureSelector<ManagementState>('vats');

export const getVatsList = createSelector(
  getFeatureManagementState,
  state => {
    return state.vats;
  }
);

export const getVatUpdated = createSelector(
  getFeatureManagementState,
  state => {
    return state.vatUpdate;
  }
);


export const addNewVat = createSelector(
  getFeatureManagementState,
  state => {
    console.log("State",state); 
    return state.newVat;
  }
);


export function vatsReducer(state = initialState, action: any) {
  switch (action.type) {

    case actions.managementActionsTypes.getVatsSuccess: {
      return {
        ...state,
        vats: action.payload,
      };
    }

    case actions.managementActionsTypes.updateVatSuccess: {
      return {
        ...state,
        vatUpdate: action.payload,
      };
    }
    case actions.managementActionsTypes.createVatSuccess: {
      console.log("payload",action.payload)
      return {
        ...state,
        newVat: action.payload,
      };
    }

    case actions.managementActionsTypes.updateVatFailed:
      return {...state, error: action};

    case actions.managementActionsTypes.getVatsFailed:
      return {...state, error: action};

    default:
      return state;
  }
}

