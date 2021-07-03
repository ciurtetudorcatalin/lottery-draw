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
import { RequestStatus, TimestampedNumber } from '@core/types';

@Injectable()
export class PostInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<TimestampedNumber[]>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return request.method === 'PATCH' ? this.storeRequest(request.body as TimestampedNumber[]) : next.handle(request);
  }

  private storeRequest(requestBody: TimestampedNumber[]): Observable<HttpEvent<RequestStatus>> {
    const stringifiedRequestBody = JSON.stringify(requestBody);
    localStorage.setItem(STORED_NUMBERS_KEY, stringifiedRequestBody);
    const requestStatus: RequestStatus = { status: 'success' }
    const response = new HttpResponse({ body: requestStatus });
    return of(response);
  }

}
