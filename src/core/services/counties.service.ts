import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActionsSubject, select, Store} from '@ngrx/store';
import * as fromManagementReducer from '../store-layer/countries/countries.reducer';
import * as fromManagementActions from '../store-layer/countries/countries.actions';
import {ofType} from '@ngrx/effects';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient,
              private store: Store<fromManagementReducer.ManagementState>,
              private actionsSubject: ActionsSubject) {
  }

  

  getCountries() {
    this.store.dispatch(new fromManagementActions.getCountries({}));
  }

  getCountriesSuccess() {
    return this.store.pipe(select(fromManagementReducer.getCountriesList) )
  }


  updateCountry(data) {
    this.store.dispatch(new fromManagementActions.updateCountry({data}));
  }

  updateCountrySuccess() {
    return this.store.pipe(select(fromManagementReducer.getCountryUpdated) )
  }

  addCountry(data) {
    console.log("Data",data); 
    this.store.dispatch(new fromManagementActions.createCountry({data}));
  }

  addCountrySuccess() {
    return this.store.pipe(select(fromManagementReducer.addNewCountry) )
  }


}

