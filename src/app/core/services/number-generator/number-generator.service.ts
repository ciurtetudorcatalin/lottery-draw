import { Injectable } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { environment } from 'environments/environment';
import { interval, Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { Random } from 'random';

@Injectable({
  providedIn: CoreModule,
})
export class NumberGeneratorService {

  public static readonly defaultNumberCount: number = environment.numberGenerator.defaultNumberCount;
  public static readonly defaultMin: number = environment.numberGenerator.defaultMin;
  public static readonly defaultMax: number = environment.numberGenerator.defaultMax;

  private readonly generator: Random;

  constructor() {
    this.generator = new Random();
  }

  public generateNumbers(count?: number, min?: number, max?: number): Observable<TimestampedNumber> {
    const actualCount = count ?? NumberGeneratorService.defaultNumberCount;
    const actualMin = min ?? NumberGeneratorService.defaultMin;
    const actualMax = max ?? NumberGeneratorService.defaultMax;

    const numberList = this.generator.uniformInt(actualMin,actualMax);

    const generatedNumbers: number[] = [];

    return interval().pipe(
      map(_ => numberList()),
      filter(num => !generatedNumbers.includes(num)),
      tap(num => generatedNumbers.push(num)),
      map(number => { return { number, timestamp: Date.now() } as TimestampedNumber }),
      take(actualCount),
    );
  }

}

export interface TimestampedNumber {
  number: number;
  timestamp: number;
}
