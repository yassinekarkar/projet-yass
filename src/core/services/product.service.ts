import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {ActionsSubject, select, Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../features/pages/products/products.model'

import {ofType} from '@ngrx/effects';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private backUrl =  `${environment.apiUrl}`   ;

  constructor(private _http: HttpClient) {}

  getProducts(params?) {
      return this._http.get<Product[]>( `${this.backUrl}/front/products` , {params}  );
  }

  /*addProduct(params?) {
    return this._http.post<Product>( `${this.backUrl}/front/product` , {params}  );
}*/

public addProduct(Product:Product):Observable <Product>
{
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
var p=JSON.stringify(Product)
console.log(p)

return this._http.post<Product>(`${this.backUrl}/front/product`,p,httpOptions);
}


public deleteProduct(code:number):Observable<Product>
  {return this._http.delete<Product>(`${this.backUrl}/front/product/${code}`);}



/*public  getProduct(code:string) {
    return this._http.get<Product[]>( `${this.backUrl}/front/products/${code}`  );
}*/

public  getProduct(code:string) {
    return this._http.get( `${this.backUrl}/front/product/${code}`  );
}


  public updateProduct(Product:string , data):Observable <any>
  {

 return this._http.put<Product>(`${this.backUrl}/front/product/${Product}`,data);
  }




 

}