import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApiService} from "../../api";
import { APIS} from "../../constants/api";
import {getIn} from "../../intercptors";
import * as actions from './payment_condition.actions';
import * as reducer from './payment_condition.reducer';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable()
export class PaymentConditionsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<reducer.ManagementState>,
    private  apiService: ApiService

  ) {
  }

  @Effect()
  AllPaymentConditions: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.getPaymentConditions),
    switchMap((data: any) => {
      return this.apiService.invoke(APIS.PAYMENT_CONDITIONS.PAYMENT_CONDITIONS_FRONT, data.request).pipe(
        map((result) => {
          return new actions.getPaymentConditionsSuccess(result);
        }),
        catchError((err) => of(new actions.getPaymentConditionsFailed(err)))
      );
    })
  );

  @Effect()
  updatePaymentCondition: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.updatePaymentCondition),
    switchMap((data: any) => {
      const endpoint = { url: APIS.PAYMENT_CONDITIONS.PAYMENT_CONDITIONS_UPDATE.url + data.request.data.code , method:APIS.PAYMENT_CONDITIONS.PAYMENT_CONDITIONS_UPDATE.method};
      console.log(endpoint);
      return this.apiService.invoke(endpoint , data.request.data).pipe(
        map((result) => {
          return new actions.updatePaymentConditionSuccess(result);
        }),
        catchError((err) => of(new actions.updatePaymentConditionFailed(err)))
      );
    })
  );

  @Effect()
  createPaymentCondition: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.createPaymentCondition),
    switchMap((data: any) => {
      console.log("Creation Info",data)
      return this.apiService.invoke( APIS.PAYMENT_CONDITIONS.PAYMENT_CONDITIONS_CREATE , data.request.data).pipe(
        map((result) => {
          console.log("Result",result)
          return new actions.createPaymentConditionSuccess(result);
        }),
        catchError((err) => of(new actions.createPaymentConditionFailed(err)))
      );
    })
  );

}
