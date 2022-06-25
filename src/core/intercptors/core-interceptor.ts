import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import * as fromManagementReducer from '../store-layer/authentication/authentication.reducer';
import {select} from '@ngrx/store';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';


@Injectable()
export class CorsInterceptor implements HttpInterceptor {
   token='' ;
  private user: any;

  constructor(

    private store: Store<fromManagementReducer.ManagementState >,
    private router: Router) {
    // get current user from store
    this.store.pipe(select(fromManagementReducer.getCurrentUser)).subscribe((user: any) => {
      this.user = user?.results?.jwt;
    });

  }


  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (this.user ) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.user}`
        }
      });
    }
    return next.handle(request);
  }
}

