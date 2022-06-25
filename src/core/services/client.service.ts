import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {ActionsSubject, select, Store} from '@ngrx/store';
import { Client } from '../../features/pages/client/client.model'
import { Observable } from 'rxjs';
import {ofType} from '@ngrx/effects';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private backUrl =  `${environment.apiUrl}`   ;

  constructor(private _http: HttpClient) {}

  getClients(params?) {
    return this._http.get<Client[]>( `${this.backUrl}/front/clients` , {params}  );
}



  public addClient(Client:Client):Observable <Client>
{
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
var p=JSON.stringify(Client)
console.log(p)

return this._http.post<Client>(`${this.backUrl}/front/client`,p,httpOptions);
}

public updateClient(Client:string , data):Observable <any>
{

return this._http.put<Client>(`${this.backUrl}/front/client/${Client}`,data);
}
 
public  getClient(code:string) {
  return this._http.get( `${this.backUrl}/front/client/${code}`  );
}




}   

