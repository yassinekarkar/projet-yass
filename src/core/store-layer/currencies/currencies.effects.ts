import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApiService} from "../../api";
import { APIS} from "../../constants/api";
import {getIn} from "../../intercptors";
import * as actions from './currencies.actions';
import * as reducer from './currencies.reducer';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable()
export class CurrenciesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<reducer.ManagementState>,
    private  apiService: ApiService

  ) {
  }

  @Effect()
  AllCurrencies: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.getCurrencies),
    switchMap((data: any) => {
      return this.apiService.invoke(APIS.CURRENCIES.CURRENCIES_FRONT, data.request).pipe(
        map((result) => {
          return new actions.getCurrenciesSuccess(result);
        }),
        catchError((err) => of(new actions.getCurrenciesFailed(err)))
      );
    })
  );

  @Effect()
  updateCurrency: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.updateCurrency),
    switchMap((data: any) => {
      const endpoint = { url: APIS.CURRENCIES.CURRENCIES_FRONT.url + data.request.data.code , method:APIS.CURRENCIES.CURRENCIES_UPDATE.method};
      console.log(endpoint);
      return this.apiService.invoke(endpoint , data.request.data).pipe(
        map((result) => {
          return new actions.updateCurrencySuccess(result);
        }),
        catchError((err) => of(new actions.updateCurrencyFailed(err)))
      );
    })
  );

  @Effect()
  createCurrency: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.createCurrency),
    switchMap((data: any) => {
      return this.apiService.invoke( APIS.CURRENCIES.CURRENCIES_CREATE , data.request.data).pipe(
        map((result) => {
          return new actions.createCurrencySuccess(result);
        }),
        catchError((err) => of(new actions.createCurrencyFailed(err)))
      );
    })
  );

}
 