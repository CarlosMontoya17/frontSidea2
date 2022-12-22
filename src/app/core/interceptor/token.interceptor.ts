import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { storageKeys } from '../models/storageKeys.model';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const _token = localStorage.getItem(storageKeys.Token);
    let _req = req;

    if (_token) {
      _req = req.clone({
        headers: _req.headers.set('x-access-token', _token),
      });
    }

    return next.handle(_req);
  }
}

export const TokenInterceptorProv = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true,
};
