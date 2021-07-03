import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class PostInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let requestBody = request.body;
    if (!(requestBody instanceof String)){
      requestBody = JSON.stringify(requestBody);
    }
    const response = new HttpResponse();
    return of(response);
  }
}
