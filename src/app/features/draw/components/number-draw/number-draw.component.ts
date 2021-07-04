import { NumberStorageService } from '@core/services/number-storage/number-storage.service';
import { NumberGeneratorService } from '@core/services/number-generator/number-generator.service';
import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { of } from 'rxjs';
import { tap, switchMap, map, concatMap, delay } from 'rxjs/operators';

@UntilDestroy()
@Component({
  templateUrl: './number-draw.component.html',
  styleUrls: ['./number-draw.component.scss']
})
export class NumberDrawComponent {

  public startBtnState: 'loaded' | 'disabled' | 'finished' = 'loaded';

  public drawedNumbers: number[] = [];

  constructor(private numberGeneratorService: NumberGeneratorService,
    private numberStorageService: NumberStorageService) { }

  public start(): void {
    of(null).pipe(
      tap(_ => this.drawedNumbers = []),
      tap(_ => this.startBtnState = 'disabled'),
      switchMap(_ => this.numberGeneratorService.generateNumbers()),
      tap(timestampedNumber => this.numberStorageService.storeTimestampedNumber(timestampedNumber)),
      map(timestampedNumber => timestampedNumber.number),
      concatMap(number => of(number).pipe(delay(800))),
      tap(number => this.drawedNumbers.push(number))
    ).subscribe({
      complete: () => this.startBtnState = 'finished'
    });
  }

}
