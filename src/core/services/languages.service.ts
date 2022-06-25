import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActionsSubject, select, Store} from '@ngrx/store';
import * as fromManagementReducer from '../store-layer/languages/languages.reducer';
import * as fromManagementActions from '../store-layer/languages/languages.actions';
import {ofType} from '@ngrx/effects';
 
@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  constructor(private http: HttpClient,
              private store: Store<fromManagementReducer.ManagementState>,
              private actionsSubject: ActionsSubject) {
  }

  getLanguages() {
    this.store.dispatch(new fromManagementActions.getLanguages({}));
  }

  getLanguagesSuccess() {
    return this.store.pipe(select(fromManagementReducer.getLanguagesList) )
  }


  updateLanguage(data) {
    this.store.dispatch(new fromManagementActions.updateLanguage({data}));
  }

  updateLanguageSuccess() {
    return this.store.pipe(select(fromManagementReducer.getLanguageUpdated) )
  }

  addLanguage(data) {
    this.store.dispatch(new fromManagementActions.createLanguage({data}));
  }

  addLanguageSuccess() {
    return this.store.pipe(select(fromManagementReducer.addNewLanguage) )
  }


}

