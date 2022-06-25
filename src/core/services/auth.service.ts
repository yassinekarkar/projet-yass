import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActionsSubject, select, Store} from '@ngrx/store';
import * as fromManagementReducer from '../store-layer/authentication/authentication.reducer';
import * as fromManagementActions from '../store-layer/authentication/authentication.actions';
import {ofType} from '@ngrx/effects';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerData;

  constructor(private http: HttpClient,
              private store: Store<fromManagementReducer.ManagementState>,
              private actionsSubject: ActionsSubject) {
  }


  loginSuccess() {
    return this.actionsSubject.pipe(
      ofType(fromManagementActions.managementActionsTypes.loginSuccess));
  }

  loginFailed() {
    return this.store.pipe(select(fromManagementReducer.getErrorLogin));

  }

  login(loginReq) {
    this.store.dispatch(new fromManagementActions.Login(loginReq));
  }

  logout() {
   localStorage.clear();
  }

}

