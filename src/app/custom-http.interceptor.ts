import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = 'asdasdkjasfsdf65a4sdf98as4df9as/df46sad8f7sa9d/f4sad6f49';

    const request2 = request.clone({
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });

    return next.handle(request2).pipe(
      finalize(() => {
        console.log('exito o error');
      })
    );
  }
}
