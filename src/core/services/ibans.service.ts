import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActionsSubject, select, Store} from '@ngrx/store';
import * as fromManagementReducer from '../store-layer/ibans/ibans.reducer';
import * as fromManagementActions from '../store-layer/ibans/ibans.actions';
import {ofType} from '@ngrx/effects';

@Injectable({
  providedIn: 'root'
})
export class IbansService {
  constructor(private http: HttpClient,
              private store: Store<fromManagementReducer.ManagementState>,
              private actionsSubject: ActionsSubject) {
  }

  getIbans() {
    this.store.dispatch(new fromManagementActions.getIbans({}));
  }

  getIbansSuccess() {
    return this.store.pipe(select(fromManagementReducer.getIbansList) )
  }


  updateIban(data) {
    this.store.dispatch(new fromManagementActions.updateIban({data}));
  }

  updateIbanSuccess() {
    return this.store.pipe(select(fromManagementReducer.getIbanUpdated) )
  }

  addIban(data) {
    this.store.dispatch(new fromManagementActions.createIban({data}));
  }

  addIbanSuccess() {
    return this.store.pipe(select(fromManagementReducer.addNewIban) )
  }


}

