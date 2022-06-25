import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApiService} from "../../api";
import { APIS} from "../../constants/api";
import {getIn} from "../../intercptors";
import * as actions from './unities.actions';
import * as reducer from './unities.reducer';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable()
export class UnitiesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<reducer.ManagementState>,
    private  apiService: ApiService

  ) {
  }

  @Effect()
  AllUnities: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.getUnities),
    switchMap((data: any) => {
      return this.apiService.invoke(APIS.UNITIES.UNITIES_FRONT, data.request).pipe(
        map((result) => {
          return new actions.getUnitiesSuccess(result);
        }),
        catchError((err) => of(new actions.getUnitiesFailed(err)))
      );
    })
  );

  @Effect()
  updateUnity: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.updateUnity),
    switchMap((data: any) => {
      const endpoint = { url: APIS.UNITIES.UNITIES_UPDATE.url + data.request.data.code , method:APIS.UNITIES.UNITIES_UPDATE.method};
      console.log(endpoint);
      return this.apiService.invoke(endpoint , data.request.data).pipe(
        map((result) => {
          return new actions.updateUnitySuccess(result);
        }),
        catchError((err) => of(new actions.updateUnityFailed(err)))
      );
    })
  );

  @Effect()
  createUnity: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.createUnity),
    switchMap((data: any) => {
      return this.apiService.invoke( APIS.UNITIES.UNITIES_CREATE , data.request.data).pipe(
        map((result) => {
          return new actions.createUnitySuccess(result);
        }),
        catchError((err) => of(new actions.createUnityFailed(err)))
      );
    })
  );

}
 