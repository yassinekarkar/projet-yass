import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActionsSubject, select, Store} from '@ngrx/store';
import * as fromManagementReducer from '../store-layer/vats/vats.reducer';
import * as fromManagementActions from '../store-layer/vats/vats.actions';
import {ofType} from '@ngrx/effects';

@Injectable({
  providedIn: 'root'
})
export class VatsService {
  constructor(private http: HttpClient,
              private store: Store<fromManagementReducer.ManagementState>,
              private actionsSubject: ActionsSubject) {
  }

  

  getVats() {
    this.store.dispatch(new fromManagementActions.getVats({}));
  }

  getVatsSuccess() {
    return this.store.pipe(select(fromManagementReducer.getVatsList) )
  }


  updateVat(data) {
    this.store.dispatch(new fromManagementActions.updateVat({data}));
  }

  updateVatSuccess() {
    return this.store.pipe(select(fromManagementReducer.getVatUpdated) )
  }

  addVat(data) {
    console.log("Data",data); 
    this.store.dispatch(new fromManagementActions.createVat({data}));
  }

  addVatSuccess() {
    return this.store.pipe(select(fromManagementReducer.addNewVat) )
  }


}

