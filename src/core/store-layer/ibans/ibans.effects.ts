import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApiService} from "../../api";
import { APIS} from "../../constants/api";
import {getIn} from "../../intercptors";
import * as actions from './ibans.actions';
import * as reducer from './ibans.reducer';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable()
export class IbansEffects {
  constructor(
    private actions$: Actions,
    private store: Store<reducer.ManagementState>,
    private  apiService: ApiService

  ) {
  }

  @Effect()
  AllIbans: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.getIbans),
    switchMap((data: any) => {
      return this.apiService.invoke(APIS.IBANS.IBANS_FRONT, data.request).pipe(
        map((result) => {
          return new actions.getIbansSuccess(result);
        }),
        catchError((err) => of(new actions.getIbansFailed(err)))
      );
    })
  );

  @Effect()
  updateIban: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.updateIban),
    switchMap((data: any) => {
      const endpoint = { url: APIS.IBANS.IBANS_UPDATE.url + data.request.data.code , method:APIS.IBANS.IBANS_UPDATE.method};
      console.log(endpoint);
      return this.apiService.invoke(endpoint , data.request.data).pipe(
        map((result) => {
          return new actions.updateIbanSuccess(result);
        }),
        catchError((err) => of(new actions.updateIbanFailed(err)))
      );
    })
  );

  @Effect()
  createIban: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.createIban),
    switchMap((data: any) => {
      return this.apiService.invoke( APIS.IBANS.IBANS_CREATE , data.request.data).pipe(
        map((result) => {
          return new actions.createIbanSuccess(result);
        }),
        catchError((err) => of(new actions.createIbanFailed(err)))
      );
    })
  );

}
