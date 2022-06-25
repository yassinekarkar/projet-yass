import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActionsSubject, select, Store} from '@ngrx/store';
import { Bill } from '../../features/pages/bills/bills.model'

import {ofType} from '@ngrx/effects';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BillsService {
  private backUrl =  `${environment.apiUrl}`   ;

  constructor(private _http: HttpClient) {}

  getBills(params?) {
      return this._http.get<Bill[]>( `${this.backUrl}/front/factures` , {params}  );
  }


 

}