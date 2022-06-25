import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActionsSubject, select, Store} from '@ngrx/store';
import * as fromManagementReducer from '../store-layer/currencies/currencies.reducer';
import * as fromManagementActions from '../store-layer/currencies/currencies.actions';
import {ofType} from '@ngrx/effects';
    
@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  constructor(private http: HttpClient,
              private store: Store<fromManagementReducer.ManagementState>,
              private actionsSubject: ActionsSubject) {
  }

  getCurrencies() {
    this.store.dispatch(new fromManagementActions.getCurrencies({}));
  }

  getCurrenciesSuccess() {
    return this.store.pipe(select(fromManagementReducer.getCurrenciesList) )
  }


  updateCurrency(data) {
    this.store.dispatch(new fromManagementActions.updateCurrency({data}));
  }

  updateCurrencySuccess() {
    return this.store.pipe(select(fromManagementReducer.getCurrencyUpdated) )
  }

  addCurrency(data) {
    this.store.dispatch(new fromManagementActions.createCurrency({data}));
  }

  addCurrencySuccess() {
    return this.store.pipe(select(fromManagementReducer.addNewCurrency) )
  }


}

