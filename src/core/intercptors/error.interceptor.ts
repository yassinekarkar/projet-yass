import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import {NzNotificationService} from "ng-zorro-antd/notification";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _notification: NzNotificationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        localStorage.clear() ;
        location.reload();
      }
      if (err.status === 500) {
        console.log(err);
      }
      if (err.status === 422) {
        console.log(err);
      }

      if (err.status === 409) {
        this._notification.create(
          'error',
          'Error',
          'Entité non unique'
        );
      }

      console.log(err.status);

      const error = err.error.message || err.statusText;
      setTimeout( ()  => {
      }, 2000);
      return throwError(error);

    }))
  }
}
