import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderSvc: LoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderSvc.visble(true);

    return next.handle(req).pipe(finalize(() => this.loaderSvc.visble(false)));
  }
}

export const LoaderInterceptorProv = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoaderInterceptor,
  multi: true,
};
