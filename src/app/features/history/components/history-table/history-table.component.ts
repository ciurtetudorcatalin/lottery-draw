import { TimestampedNumber } from '@core/types';
import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryTableComponent implements OnChanges {

  @Input()
  public data!: TimestampedNumber[];

  public sortedData!: TimestampedNumber[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      const dataChange = changes.data;
      const dataCopy = (dataChange.currentValue as TimestampedNumber[]);
      this.sortedData = [...dataCopy].sort(this.compareTimestampedNumbers);
    }
  }


  private compareTimestampedNumbers(a: TimestampedNumber, b: TimestampedNumber): number {
    return a.timestamp > b.timestamp ? 1 : -1;
  }

}
