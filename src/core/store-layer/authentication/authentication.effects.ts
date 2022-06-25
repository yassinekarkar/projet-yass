import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApiService} from "../../api";
import { APIS} from "../../constants/api";
import {getIn} from "../../intercptors";
import * as actions from './authentication.actions';
import * as reducer from './authentication.reducer';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable()
export class AuthenticationEffects {
  constructor(
    private actions$: Actions,
    private store: Store<reducer.ManagementState>,
    private  apiService: ApiService

  ) {
  }

  @Effect()
  login: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.login),
    switchMap((data: any) => {
      return this.apiService.invoke(APIS.AUTHENTICATION.LOGIN, data.request).pipe(
        map((result : any) => {
          return new actions.LoginSuccess( result);
        }),
        catchError((err) => of(new actions.LoginFailed(err)))
      );
    })
  );

}
