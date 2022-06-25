import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {ActionsSubject, select, Store} from '@ngrx/store';
import {IUser} from "./../interfaces/user.interface";
import { Observable } from 'rxjs';
import {ofType} from '@ngrx/effects';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  private backUrl =  `${environment.apiUrl}`   ;

  constructor(private _http: HttpClient) {}

  getUserInfo(params?) {
    return this._http.get<IUser[]>( `${this.backUrl}/front/company/informations` , {params}  );
}



}