import { Component, OnInit } from '@angular/core';
import { NumberStorageService } from '@core/services/number-storage/number-storage.service';
import { TimestampedNumber } from '@core/types';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit {

  public timestampedNumbers$!: Observable<TimestampedNumber[]>;
  private loading = false;

  constructor(private numberStorage: NumberStorageService) { }

  ngOnInit(): void {
    this.timestampedNumbers$ = this.sendRequest();
  }

  private sendRequest(): Observable<TimestampedNumber[]> {
    return of(null).pipe(
      tap(_ => this.loading = true),
      switchMap(_ => this.numberStorage.getAllTimestampedNumbers()),
      catchError(err => { this.loading = false; return throwError(err)}),
      tap(_ => this.loading = false),
      tap(console.log)
    );
  }

  public get isLoading(): boolean {
    return this.loading;
  }

  public retry(): void {
    this.timestampedNumbers$ = this.numberStorage.getAllTimestampedNumbers();
  }

}
