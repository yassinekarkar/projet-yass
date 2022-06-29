import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { Quote } from '../../features/pages/quote/quote.model'
import { Observable } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private backUrl = `${environment.apiUrl}`;

  constructor(private _http: HttpClient) { }

  public getQuotes(params?) {
    return this._http.get<Quote[]>(`${this.backUrl}/front/quotes`, { params });
  }


  public addQuote(Quote: any): Observable<Quote> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    var p = JSON.stringify(Quote)
    console.log(p)

    return this._http.post<Quote>(`${this.backUrl}/front/quote`, p, httpOptions);
  }



  public getQuote(code: string) : Observable<any> {
    return this._http.get<any>(`${this.backUrl}/front/quote/${code}`);
  }

  public updateQuote(Quote:string, data: any): Observable<any> {

    return this._http.put<any>(`${this.backUrl}/front/quote/${Quote}`, data);
  }





}