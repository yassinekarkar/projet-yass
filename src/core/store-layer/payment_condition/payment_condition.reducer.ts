import * as actions from './payment_condition.actions';

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IPaymentCondition} from "../../interfaces";

export interface ManagementState {
  error: any,
  paymentConditions: IPaymentCondition[],
  paymentConditionUpdate: IPaymentCondition,
  newPaymentCondition: IPaymentCondition,

}

const initialState: ManagementState = {
  error: null,
  paymentConditions: null,
  paymentConditionUpdate: null,
  newPaymentCondition: null,
};

const getFeatureManagementState = createFeatureSelector<ManagementState>('paymentConditions');

export const getPaymentConditionsList = createSelector(
  getFeatureManagementState,
  state => {
    return state.paymentConditions;
  }
);

export const getPaymentConditionUpdated = createSelector(
  getFeatureManagementState,
  state => {
    return state.paymentConditionUpdate;
  }
);


export const addNewPaymentCondition = createSelector(
  getFeatureManagementState,
  state => {
    return state.newPaymentCondition;
  }
);


export function paymentConditionsReducer(state = initialState, action: any) {
  switch (action.type) {

    case actions.managementActionsTypes.getPaymentConditionsSuccess: {
      return {
        ...state,
        paymentConditions: action.payload,
      };
    }

    case actions.managementActionsTypes.updatePaymentConditionSuccess: {
      return {
        ...state,
        paymentConditionUpdate: action.payload,
      };
    }
    case actions.managementActionsTypes.createPaymentConditionSuccess: {

      return {
        ...state,
        newPaymentCondition: action.payload,
      };
    }

    case actions.managementActionsTypes.updatePaymentConditionFailed:
      return {...state, error: action};

    case actions.managementActionsTypes.getPaymentConditionsFailed:
      return {...state, error: action};

    default:
      return state;
  }
}
 
