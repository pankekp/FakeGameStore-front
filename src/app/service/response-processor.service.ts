import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Error} from '../pojo/error';

@Injectable({
  providedIn: 'root'
})
export class ResponseProcessorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(
        catchError((res: HttpErrorResponse) => {
          let errorMessage = '';
          switch (res.status) {
            case 404:
              console.dir(res.error);
              const errorInfo: Error = res.error;
              errorMessage = errorInfo.title + ' : ' + errorInfo.message;
              break;
            case 400:
              console.dir(res.error);
              errorMessage = 'Operating failed, please check your input and try again later';
              break;
          }
          // 抛出的是用来提示用户的errorInfo
          return throwError(errorMessage);
        })
      );
  }
}
