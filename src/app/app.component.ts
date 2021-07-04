import { Component, OnDestroy, OnInit } from '@angular/core';
import { NumberGeneratorService } from '@core/services/number-generator/number-generator.service';
import { NumberStorageService } from '@core/services/number-storage/number-storage.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent{}
