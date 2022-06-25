import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {ApiService} from "../../api";
import { APIS} from "../../constants/api";
import {getIn} from "../../intercptors";
import * as actions from './countries.actions';
import * as reducer from './countries.reducer';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable()
export class CountriesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<reducer.ManagementState>,
    private  apiService: ApiService

  ) {
  }

  @Effect()
  getCountriesList: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.getCountries),
    switchMap((data: any) => {
      return this.apiService.invoke(APIS.COUNTRIES.COUNTRIES_FRONT, data.request).pipe(
        map((result) => {
          return new actions.getCountriesSuccess(result);
        }),
        catchError((err) => of(new actions.getCountriesFailed(err)))
      );
    })
  );


  @Effect()
  updateCountry: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.updateCountry),
    switchMap((data: any) => {
      const endpoint = { url: APIS.COUNTRIES.COUNTRY_UPDATE.url + data.request.data.code , method:APIS.COUNTRIES.COUNTRY_UPDATE.method};
      console.log(endpoint);
      return this.apiService.invoke(endpoint , data.request.data).pipe(
        map((result) => {
          return new actions.updateCountrySuccess(result);
        }),
        catchError((err) => of(new actions.updateCountryFailed(err)))
      );
    })
  );


  @Effect()
  createCountry: Observable<any> = this.actions$.pipe(
    ofType(actions.managementActionsTypes.createCountry),
    switchMap((data: any) => {
      return this.apiService.invoke( APIS.COUNTRIES.COUNTRY_CREATE , data.request.data).pipe(
        map((result) => {
          return new actions.createCountrySuccess(result);
        }),
        catchError((err) => of(new actions.createCountryFailed(err)))
      );
    })
  );




}
