import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApiService} from "../../api";
import { APIS} from "../../constants/api";
import {getIn} from "../../intercptors";
import * as actions from './languages.actions';
import * as reducer from './languages.reducer';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable()
export class LanguagesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<reducer.ManagementState>,
    private  apiService: ApiService

  ) {
  }
 
  @Effect()
  AllLanguages: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.getLanguages),
    switchMap((data: any) => {
      return this.apiService.invoke(APIS.LANGUAGES.LANGUAGES_FRONT, data.request).pipe(
        map((result) => {
          return new actions.getLanguagesSuccess(result);
        }),
        catchError((err) => of(new actions.getLanguagesFailed(err)))
      );
    })
  );

  @Effect()
  updateLanguage: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.updateLanguage),
    switchMap((data: any) => {
      const endpoint = { url: APIS.LANGUAGES.LANGUAGES_UPDATE.url + data.request.data.code , method:APIS.LANGUAGES.LANGUAGES_UPDATE.method};
      console.log(endpoint);
      return this.apiService.invoke(endpoint , data.request.data).pipe(
        map((result) => {
          return new actions.updateLanguageSuccess(result);
        }),
        catchError((err) => of(new actions.updateLanguageFailed(err)))
      );
    })
  );

  @Effect()
  createLanguage: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.createLanguage),
    switchMap((data: any) => {
      return this.apiService.invoke( APIS.LANGUAGES.LANGUAGES_CREATE , data.request.data).pipe(
        map((result) => {
          return new actions.createLanguageSuccess(result);
        }),
        catchError((err) => of(new actions.createLanguageFailed(err)))
      );
    })
  );

}
 