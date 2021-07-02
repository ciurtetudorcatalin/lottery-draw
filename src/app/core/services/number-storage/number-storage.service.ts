import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { RequestStatus, TimestampedNumber } from '@core/types';
import { environment } from 'environments/environment';
import { Observable, Subject } from 'rxjs';
import { bufferCount, filter, map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: CoreModule
})
export class NumberStorageService implements OnDestroy {

  private readonly cacheSize = environment.numberStorage.cacheSize;
  private readonly endpoint = environment.numberStorage.storageEndpoint;

  private numbersBus = new Subject<TimestampedNumber>();
  private cache: TimestampedNumber[] = [];

  constructor(private httpClient: HttpClient) {
    this.initCacheObservable();
  }

  private sendCacheForStorage(data: TimestampedNumber[]): Observable<RequestStatus> {
    return this.httpClient.patch<RequestStatus>(this.endpoint, JSON.stringify(data));
  }

  private initCacheObservable() {
    this.numbersBus.asObservable().pipe(
      tap(number => this.cache.push(number)),
      bufferCount(this.cacheSize),
      switchMap(cache => this.sendCacheForStorage(cache)),
      filter(requestStatus => requestStatus.status === 'success'),
      tap(_ => this.cache = [])
    ).subscribe();
  }

  private getCacheFromRemote(): Observable<TimestampedNumber[]> {
    return this.httpClient.get<TimestampedNumber[]>(this.endpoint);
  }

  public ngOnDestroy(): void {
    this.sendCacheForStorage(this.cache);
  }

  public storeTimestampedNumber(number: TimestampedNumber): void {
    this.numbersBus.next(number);
  }

  public storeTimestampedNumbers(numbers: TimestampedNumber[]): void {
    numbers.forEach(number => this.storeTimestampedNumber(number));
  }

  public getAllTimestampedNumbers(): Observable<TimestampedNumber[]> {
    return this.getCacheFromRemote().pipe(map(requestedData => requestedData.concat(this.cache)));
  }

}
