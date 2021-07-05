import { TimestampedNumber } from '@core/types';
import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { from, interval, Observable, of, range } from 'rxjs';
import { map, skip, take, switchMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styles: [
    `
    table {
      border-collapse: collapse;
      box-shadow: 0 5px 10px #e1e5ee;
      background-color: white;
      text-align: left;
      overflow: hidden;
      width: 100%;
          }
    thead {
      box-shadow: 0 5px 10px #e1e5ee;
          }

    th {
      padding: 1rem 2rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-size: 0.8rem;
      font-weight: 600;
    }

    td {
      padding: 1rem 2rem;
    }
    `
  ]
})
export class HistoryTableComponent {

  @Input()
  public data!: TimestampedNumber[];

  private _currentPage: number = 1;
  private readonly pageSize: number = 10;

  private compareTimestampedNumbers(a: TimestampedNumber, b: TimestampedNumber): number {
    return a.timestamp > b.timestamp ? 1 : -1;
  }

  public get displayedData(): Observable<TimestampedNumber[]> {
    const skippedAmount = (this.currentPage - 1) * this.pageSize;
    return of(this.data)
      .pipe(
        map(data => [...data].sort(this.compareTimestampedNumbers)),
        switchMap(x => from(x)),
        skip(skippedAmount),
        take(this.pageSize),
        toArray()
      );
  }

  public get pageList(): Observable<number[]> {
    return range(1,this.pageCount).pipe(toArray());
  }

  public get pageCount(): number {
    return Math.ceil(this.data.length / this.pageSize);
  }

  public get currentPage(): number {
    return this._currentPage;
  }

  public set currentPage(newPage: number){
    this._currentPage = newPage;
  }



}
