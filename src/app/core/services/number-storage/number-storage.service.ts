import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { STORED_NUMBERS_KEY } from '@core/constants';
import { CoreModule } from '@core/core.module';
import { RequestStatus, TimestampedNumber } from '@core/types';
import { environment } from 'environments/environment';
import { fromEvent, Observable, of, Subject, throwError } from 'rxjs';
import { bufferCount, delay, filter, map, switchMap, take, tap, catchError } from 'rxjs/operators';

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
    window.onbeforeunload = () => this.ngOnDestroy();
  }

  private sendCacheForStorage(data: TimestampedNumber[]): Observable<RequestStatus> {
    return this.httpClient.patch<RequestStatus>(this.endpoint, data);
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

  // Hardcoding this because beacons are not getting intercepted by the HTTP Interceptors
  public ngOnDestroy(): void {
    const stringifiedCurrentStoredNumbers = localStorage.getItem(STORED_NUMBERS_KEY);
    const parsedCurrentStoredNumbers = (stringifiedCurrentStoredNumbers !== null ? JSON.parse(stringifiedCurrentStoredNumbers) : []) as TimestampedNumber[];
    const newStoredNumbers = parsedCurrentStoredNumbers.concat(this.cache);

    localStorage.setItem(STORED_NUMBERS_KEY, JSON.stringify(newStoredNumbers));
  }

  public storeTimestampedNumber(number: TimestampedNumber): void {
    this.numbersBus.next(number);
  }

  public storeTimestampedNumbers(numbers: TimestampedNumber[]): void {
    numbers.forEach(number => this.storeTimestampedNumber(number));
  }

  public getAllTimestampedNumbers(): Observable<TimestampedNumber[]> {
    return this.getCacheFromRemote()
    .pipe(
      map(requestedData => requestedData.concat(this.cache)),
      delay(2000)
      );
  }

}
