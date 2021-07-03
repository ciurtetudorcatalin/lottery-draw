import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GetInterceptor } from './get.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe('GetInterceptorInterceptor', () => {
  let httpMock: HttpTestingController;
  let interceptor: GetInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetInterceptor,
        {
          provide: HTTP_INTERCEPTORS, useClass: GetInterceptor, multi: true
        }
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    httpMock = TestBed.inject(HttpTestingController);
    interceptor = TestBed.inject(GetInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });


  it('should intercept a request', () => {
    httpMock.expectOne
  });

});
