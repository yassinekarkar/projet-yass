import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {ActionsSubject, select, Store} from '@ngrx/store';
import { IUser } from './../interfaces/user.interface';
import { Observable } from 'rxjs';
import {ofType} from '@ngrx/effects';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class UserCallerService {
    private backUrl =  `${environment.apiUrl}`   ;
  
    constructor(private _http: HttpClient) {}
  
    public  getUserInfo(params?) {
        return this._http.post( `${this.backUrl}/authenticate`,  {params} );
      }


}