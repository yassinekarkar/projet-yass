import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActionsSubject, select, Store} from '@ngrx/store';
import * as fromManagementReducer from '../store-layer/payment_condition/payment_condition.reducer';
import * as fromManagementActions from '../store-layer/payment_condition/payment_condition.actions';
import {ofType} from '@ngrx/effects';

@Injectable({
  providedIn: 'root'
})
export class PaymentConditionsService {
  registerData;

  constructor(private http: HttpClient,
              private store: Store<fromManagementReducer.ManagementState>,
              private actionsSubject: ActionsSubject) {
  }



  getPaymentCondition() {
    this.store.dispatch(new fromManagementActions.getPaymentConditions({}));
  }


  getPaymentConditionSuccess() {
    return this.store.pipe(select(fromManagementReducer.getPaymentConditionsList) )

  }



  updatePaymentCondition(data) {
    this.store.dispatch(new fromManagementActions.updatePaymentCondition({data}));
  }

  updatePaymentConditionSuccess() {
    return this.store.pipe(select(fromManagementReducer.getPaymentConditionUpdated) )
  }

  addPaymentCondition(data) {
    console.log("Data",data); 
    this.store.dispatch(new fromManagementActions.createPaymentCondition({data}));
  }

  addPaymentConditionSuccess() {
    return this.store.pipe(select(fromManagementReducer.addNewPaymentCondition) )
  }



}

