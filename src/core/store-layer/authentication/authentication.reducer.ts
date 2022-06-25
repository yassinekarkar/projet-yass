  import {createFeatureSelector, createSelector} from '@ngrx/store';
  import {isEmpty} from "../../intercptors";
  import * as actions from './authentication.actions';

  export interface ManagementState {
    currentUser: any;
    errorLogin: any;
    register: any;
    error: any;
  }

  const initialState: ManagementState = {
    currentUser: null,
    errorLogin: null,
    register: null,
    error: null,
  };


  const getFeatureManagementState = createFeatureSelector<ManagementState>('authentication');

  export const getCurrentUser = createSelector(
    getFeatureManagementState,
    state => {
      const currentUser = localStorage.getItem('currentUser');
      const user = !isEmpty(currentUser) ? JSON.parse(currentUser) : null;
      if (user) {
        user.enable = true;
      }
      return state.currentUser || user;
    }
  );
  export const getErrorLogin = createSelector(
    getFeatureManagementState,
    state => {
      return state.errorLogin;
    }
  );
  export const getRegister = createSelector(
    getFeatureManagementState,
    state => {
      return state.register;
    }
  );


  export function authenticationReducer(state = initialState, action: actions.authenticationActions) {
    switch (action.type) {
      case actions.managementActionsTypes.loginSuccess: {
        localStorage.setItem('currentUser', JSON.stringify(action.payload));
        return {
          ...state,
          currentUser: action.payload
        };
      }
      case actions.managementActionsTypes.loginFailed: {
        return {...state, errorLogin: action.payload};
      }
      case actions.managementActionsTypes.ThrowError:
        return {...state, error: action};
      default:
        return state;
    }
  }

