import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActionsSubject, select, Store} from '@ngrx/store';
import * as fromManagementReducer from '../store-layer/unities/unities.reducer';
import * as fromManagementActions from '../store-layer/unities/unities.actions';
import {ofType} from '@ngrx/effects';
    
@Injectable({
  providedIn: 'root'
})
export class UnitiesService {
  constructor(private http: HttpClient,
              private store: Store<fromManagementReducer.ManagementState>,
              private actionsSubject: ActionsSubject) {
  }

  getUnities() {
    this.store.dispatch(new fromManagementActions.getUnities({}));
  }

  getUnitiesSuccess() {
    return this.store.pipe(select(fromManagementReducer.getUnitiesList) )
  }


  updateUnity(data) {
    this.store.dispatch(new fromManagementActions.updateUnity({data}));
  }

  updateUnitySuccess() {
    return this.store.pipe(select(fromManagementReducer.getUnityUpdated) )
  }

  addUnity(data) {
    this.store.dispatch(new fromManagementActions.createUnity({data}));
  }

  addUnitySuccess() {
    return this.store.pipe(select(fromManagementReducer.addNewUnity) )
  }


}

