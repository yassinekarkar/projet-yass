import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient
  ) {
    this.headers = new HttpHeaders({});

  }

  invoke(endpoint, reqestData) {
    return new Observable(observer => {
      switch (endpoint.method) {
        case 'POST' :
          this.headers.append('Content-Type', endpoint.contentType ? endpoint.contentType : 'application/json; charset=utf-8');

          this.http.post(endpoint.url, reqestData, {headers: this.headers}).subscribe((data) => {
              this.checkResponse(observer, data);
            },
            (error) => {
              this.handleError(observer, error);
            });
          break;
        case 'GET' :
          this.headers.append('Content-Type', endpoint.contentType ? endpoint.contentType : 'application/json; charset=utf-8');

          this.http.get(endpoint.url, {headers: this.headers, params: reqestData}).subscribe((data) => {
              this.checkResponse(observer, data);
            },
            (error) => {
              this.handleError(observer, error);
            });
          break;
        case 'GET_TEXT' :
          this.headers.append('Content-Type', endpoint.contentType ? endpoint.contentType : 'application/json; charset=utf-8');

          this.http.get(endpoint.url, {headers: this.headers, params: reqestData, responseType: 'text'}).subscribe((data) => {
              this.checkResponse(observer, data);
            },
            (error) => {
              this.handleError(observer, error);
            });
          break;
        case 'PUT' :
          this.headers.append('Content-Type', endpoint.contentType ? endpoint.contentType : 'application/json; charset=utf-8');

          // this.headers.append('Content-Type', 'multipart/form-data');

          this.http.put(endpoint.url, reqestData, {headers: this.headers}).subscribe((data) => {
              this.checkResponse(observer, data);
            },
            (error) => {
              this.handleError(observer, error);
            });
          break;
        default:
          break;
        case 'DELETE' :
          this.headers.append('Content-Type', endpoint.contentType ? endpoint.contentType : 'application/json; charset=utf-8');

          this.http.delete(endpoint.url, {headers: this.headers, params: reqestData}).subscribe((data) => {
              this.checkResponse(observer, data);
            },
            (error) => {
              this.handleError(observer, error);
            });
          break;

      }

    });
  }

  checkResponse(observer, response) {
    if (this.isSuccess(response)) {
      observer.next(response);
    } else {
      this.showError(response.header);
      observer.error(response);
    }
  }

  handleError(observer, error) {
    if (error.status === 401) {
    } else if (error.status === 400) {
      this.showError(error.header);
    } else {
      this.showError(error);
    }

    observer.error(error);
  }

  // check if the response is a success
  isSuccess(event) {
    return true;
  }

  showError(error) {
    // Swal.fire({
    //     icon: 'error',
    //     title: this.translateService.instant('common.error'),
    //     text: getIn('description', error) || 'Something went wrong!'
    // });
  }

}
