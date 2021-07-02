import { TestBed } from '@angular/core/testing';
import { CoreModule } from '@core/core.module';
import { environment } from 'environments/environment';

import { NumberGeneratorService } from './number-generator.service';

describe('NumberGeneratorService', () => {
  let service: NumberGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [CoreModule] });
    service = TestBed.inject(NumberGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should have a default min value equal to the enviroment defined one which is ${environment.numberGenerator.defaultMin}`, () => {
    const defaultMin = NumberGeneratorService.defaultMin;
    expect(defaultMin).toEqual(environment.numberGenerator.defaultMin);
  });

  it(`should have a default max value equal to the enviroment defined one which is ${environment.numberGenerator.defaultMax}`, () => {
    const defaultMaxValue = NumberGeneratorService.defaultMax;
    expect(defaultMaxValue).toEqual(environment.numberGenerator.defaultMax);
  });

  it(`should have a default number count value equal to the enviroment defined one which is ${environment.numberGenerator.defaultNumberCount}`, () => {
    const defaultNumberCount = NumberGeneratorService.defaultNumberCount;
    expect(defaultNumberCount).toEqual(environment.numberGenerator.defaultNumberCount);
  });

  it(`should generate ${environment.numberGenerator.defaultNumberCount} numbers between the default values`, (done) => {
    const numbers = [];
    const min = environment.numberGenerator.defaultMin;
    const max = environment.numberGenerator.defaultMax;
    service.generateNumbers().subscribe({
      next: timeStampednumber => {
        numbers.push(timeStampednumber.number);
        expect(timeStampednumber.number).toBeGreaterThanOrEqual(min);
        expect(timeStampednumber.number).toBeLessThanOrEqual(max)
      },
      complete: () => { expect(numbers.length).toEqual(environment.numberGenerator.defaultNumberCount); done() }
    });
  });

  it(`should timestamp every generated number`, (done) => {
    service.generateNumbers().subscribe({
      next: timestampedNumber => expect(timestampedNumber.timestamp).toBeDefined(),
      complete: () => done()
    });
  });

  it('should generate a number of numbers equal to it`s count parameter', (done) => {
    const count = 15;
    let currentCount = 0;
    service.generateNumbers(15).subscribe({
      next: timestampedNumber => currentCount++,
      complete: () => { expect(count).toEqual(currentCount); done() }
    });
  });

  it('should behave accordingly with custom parameters', (done) => {
    const count = 100;
    let currentCount = 0;
    let min = 80;
    let max = 250;
    service.generateNumbers(count, min, max).subscribe({
      next: number => { expect(number.number).toBeGreaterThanOrEqual(min) && expect(number.number).toBeLessThanOrEqual(min); currentCount++ },
      complete: () => { expect(currentCount).toEqual(count); done(); }
    });
  });

});
