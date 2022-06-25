import * as actions from './unities.actions';

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IUnity} from "../../interfaces";

export interface ManagementState {
  error: any,
  unities: IUnity[],
  unityUpdate: IUnity,
  newUnity: IUnity,

}

const initialState: ManagementState = {
  error: null,
  unities: null,
  unityUpdate: null,
  newUnity: null,
};

const getFeatureManagementState = createFeatureSelector<ManagementState>('unities');

export const getUnitiesList = createSelector(
  getFeatureManagementState,
  state => {
    return state.unities;
  }
);

export const getUnityUpdated = createSelector(
  getFeatureManagementState,
  state => {
    return state.unityUpdate;
  }
);


export const addNewUnity = createSelector(
  getFeatureManagementState,
  state => {
    return state.newUnity;
  }
);


export function unitiesReducer(state = initialState, action: any) {
  switch (action.type) {

    case actions.managementActionsTypes.getUnitiesSuccess: {
      return {
        ...state,
        unities: action.payload,
      };
    }

    case actions.managementActionsTypes.updateUnitySuccess: {
      return {
        ...state,
        unityUpdate: action.payload,
      };
    }
    case actions.managementActionsTypes.createUnitySuccess: {

      return {
        ...state,
        newUnity: action.payload,
      };
    }

    case actions.managementActionsTypes.updateUnityFailed:
      return {...state, error: action};

    case actions.managementActionsTypes.getUnitiesFailed:
      return {...state, error: action};

    default:
      return state;
  }
}
 
