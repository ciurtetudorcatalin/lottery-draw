import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { STORED_NUMBERS_KEY } from '../constants';
import { TimestampedNumber } from '@core/types';


@Injectable()
export class GetInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return request.method === 'GET' ? this.handleRequestHere(request) : next.handle(request);

  }
  private handleRequestHere(request: HttpRequest<unknown>): Observable<HttpEvent<unknown>> {
    const rawStoredData = localStorage.getItem(STORED_NUMBERS_KEY) ?? '[]';
    const parsedData = JSON.parse(rawStoredData) as TimestampedNumber;
    const response = new HttpResponse({ body: parsedData });
    return of(response);
  }
}
