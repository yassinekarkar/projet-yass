import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApiService} from "../../api";
import { APIS} from "../../constants/api";
import {getIn} from "../../intercptors";
import * as actions from './vats.actions';
import * as reducer from './vats.reducer';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable()
export class VatsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<reducer.ManagementState>,
    private  apiService: ApiService

  ) {
  }

  @Effect()
  AllVats: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.getVats),
    switchMap((data: any) => {
      return this.apiService.invoke(APIS.VATS.VATS_FRONT, data.request).pipe(
        map((result) => {
          return new actions.getVatsSuccess(result);
        }),
        catchError((err) => of(new actions.getVatsFailed(err)))
      );
    })
  );

  @Effect()
  updateVat: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.updateVat),
    switchMap((data: any) => {
      const endpoint = { url: APIS.VATS.VATS_UPDATE.url + data.request.data.code , method:APIS.VATS.VATS_UPDATE.method};
      console.log(endpoint);
      return this.apiService.invoke(endpoint , data.request.data).pipe(
        map((result) => {
          return new actions.updateVatSuccess(result);
        }),
        catchError((err) => of(new actions.updateVatFailed(err)))
      );
    })
  );

  @Effect()
  createVat: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.createVat),
    switchMap((data: any) => {
      console.log("Creation Info",data)
      return this.apiService.invoke( APIS.VATS.VATS_CREATE , data.request.data).pipe(
        map((result) => {
          console.log("Result",result)
          return new actions.createVatSuccess(result);
        }),
        catchError((err) => of(new actions.createVatFailed(err)))
      );
    })
  );

}
