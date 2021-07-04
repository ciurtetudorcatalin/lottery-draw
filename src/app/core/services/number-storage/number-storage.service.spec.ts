import { TestBed } from '@angular/core/testing';
import { CoreModule } from '@core/core.module';
import { TimestampedNumber } from '@core/types';
import { environment } from 'environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NumberStorageService } from './number-storage.service';
import { INTERCEPTORS_PROVIDER } from '@config/interceptors';

function expectCacheSizeToBe(service: NumberStorageService, size: number) {
  const cacheDescriptor = Object.getOwnPropertyDescriptor(service, 'cache') as PropertyDescriptor;
  const cache = cacheDescriptor.value as TimestampedNumber[];
  expect(cache.length).toEqual(size);
}


describe('NumberStorageService', () => {
  let service: NumberStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [CoreModule, HttpClientTestingModule], providers: [INTERCEPTORS_PROVIDER] });
    service = TestBed.inject(NumberStorageService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should cache up to ${environment.numberStorage.cacheSize - 1} numbers`, () => {
    for (let i = 0; i < environment.numberStorage.cacheSize - 1; i++) {
      service.storeTimestampedNumber({ number: i, timestamp: Date.now() });
    }
    const cacheDescriptor = Object.getOwnPropertyDescriptor(service, 'cache') as PropertyDescriptor;
    const cache = cacheDescriptor.value as TimestampedNumber[];
    expect(cache.length).toEqual(environment.numberStorage.cacheSize - 1);
  });

  afterAll(() => {
    localStorage.clear();
  });
});
