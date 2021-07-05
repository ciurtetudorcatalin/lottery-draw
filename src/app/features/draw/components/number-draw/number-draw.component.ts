import { TimestampedNumber } from './../../../../core/types';
import { NumberStorageService } from '@core/services/number-storage/number-storage.service';
import { NumberGeneratorService } from '@core/services/number-generator/number-generator.service';
import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { of } from 'rxjs';
import { tap, switchMap, map, concatMap, delay, finalize } from 'rxjs/operators';

@UntilDestroy()
@Component({
  templateUrl: './number-draw.component.html',
})
export class NumberDrawComponent {

  public startBtnState: 'loaded' | 'disabled' | 'finished' = 'loaded';

  public _drawedNumbers: TimestampedNumber[] = [];

  constructor(private numberGeneratorService: NumberGeneratorService,
    private numberStorageService: NumberStorageService) { }

  public drawEndCleanup() {
    this.startBtnState = 'finished';
    this.numberStorageService.storeTimestampedNumbers(this._drawedNumbers);
  }

  public start(): void {
    of(null).pipe(
      tap(_ => this._drawedNumbers = []),
      tap(_ => this.startBtnState = 'disabled'),
      switchMap(_ => this.numberGeneratorService.generateNumbers()),
      concatMap(number => of(number).pipe(delay(800))),
      tap(number => this._drawedNumbers.push(number)),
      finalize(() => this.drawEndCleanup())
    ).subscribe();
  }

  public get drawedNumbers(): number[] {
    return this._drawedNumbers.map(x => x.number);
  }

}
